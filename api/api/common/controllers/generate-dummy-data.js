const faker = require('faker');
const _ = require('lodash');
const moment = require('moment');

const genRandom = (min, max) => _.random(min, max, false);

// Length will be between min and max, and all elements will be undefined
// It's just to use forEach
const genRandomLenArr = (min, max) => Array.from(Array(genRandom(min, max)));

const timeout = 1000;

// Create a user

// For each user
// Create 1-2 accounts, 1-3 cards, add 1-5 messages, add 1-10 transfers with random data
// Also generate some income and expenses stats

const getDefaultUserData = async () => {
   const password = await strapi.plugins['users-permissions'].services.user.hashPassword({
      password: 'admin123'
   });

   return {
      username: faker.internet.userName().toLowerCase(),
      email: faker.internet.email().toLowerCase(),
      password,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      dob: faker.date.between('1960-01-01', '2000-12-31'),
      phone: faker.phone.phoneNumberFormat(1),
      street_addr: faker.address.streetAddress(),
      postcode: faker.address.zipCode(),
      city: faker.address.city()
   };
};

const controlledUserEmail = 'email@example.com';

const createUser = async () => {
   const obj = await getDefaultUserData();

   return strapi.query('user', 'users-permissions').create(obj);
};

const createControlledUser = async () => {
   const defaultData = await getDefaultUserData();
   const obj = { ...defaultData, email: controlledUserEmail };

   return strapi.query('user', 'users-permissions').create(obj);
};

// Accounts
const createAccount = user => {
   const obj = {
      owner: user.id,
      type: faker.random.arrayElement(['basic', 'premium', 'gold']),
      is_active: faker.random.boolean(),
      sortcode: faker.finance.mask(6, false, false),
      number: faker.finance.mask(8, false, false),
      currency: faker.random.arrayElement(['eur', 'gbp']),
      current_balance: faker.finance.amount(1, 10000, 2)
   };

   return strapi.query('account').create(obj);
};

// Cards
const createCard = (user, accountId) => {
   const obj = {
      owner: user.id,
      source_account: accountId,
      is_active: faker.random.boolean(),
      number: faker.finance.mask(16, false, false),
      pin: faker.finance.mask(4, false, false),
      expires_month: faker.random.number({ min: 1, max: 12 }),
      expires_year: faker.random.number({ min: 2020, max: 2030 }),
      daily_online_limit: faker.random.number({ min: 1, max: 10000 }),
      daily_withdrawal_limit: faker.random.number({ min: 1, max: 10000 }),
      monthly_online_limit: faker.random.number({ min: 1, max: 10000 }),
      monthly_withdrawal_limit: faker.random.number({ min: 1, max: 10000 })
   };

   return strapi.query('card').create(obj);
};

// Transfers
const createTransfer = (user, sourceAccountId) => {
   const obj = {
      sender: user.id,
      payee_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      amount: faker.finance.amount(1, 2500, 2),
      currency: faker.random.arrayElement(['eur', 'gbp']),
      reference: faker.lorem.words(3).substring(0, 20),
      source_account: sourceAccountId,
      payee_addr: faker.address.streetAddress(),
      status: faker.random.arrayElement(['failed', 'pending', 'complete']),
      method: faker.random.arrayElement(['normal', 'turbo']),
      payee_acc_number: faker.finance.mask(16, false, false),
      type: faker.random.arrayElement(['income', 'expense']),
      prev_balance: faker.random.number({ min: 1, max: 10000 }),
      next_balance: faker.random.number({ min: 1, max: 10000 })
   };

   return strapi.query('transfer').create(obj);
};

// Messages
const createMessage = user => {
   const obj = {
      recipient: user.id,
      title: faker.lorem.words(5),
      content: faker.lorem.paragraph(),
      sent_at: faker.date.between('2021-01-01', '2021-12-31'),
      is_read: faker.random.boolean(),
      read_at: faker.date.between('2021-01-01', '2021-12-31')
   };

   return strapi.query('message').create(obj);
};

// Statistics
const createStats = accId =>
   new Promise(async (resolve, reject) => {
      try {
         const date = faker.date.between(moment().subtract(7, 'days').format(), new Date());

         const incomeUpdates = {
            type: 'income',
            value: faker.finance.amount(1, 2500, 2),
            collected_at: date,
            account: accId
         };

         const expensesUpdates = {
            type: 'expenses',
            value: faker.finance.amount(1, 2500, 2),
            collected_at: date,
            account: accId
         };

         const currentStats = await strapi.query('stats').findOne();

         if (!currentStats) {
            updates = {
               income_stats: [incomeUpdates],
               expenses_stats: [expensesUpdates]
            };

            // Update
            await strapi.query('stats').create(updates);
         } else {
            // Save updates
            updates = {
               income_stats: [...currentStats?.income_stats, incomeUpdates],
               expenses_stats: [...currentStats?.expenses_stats, expensesUpdates]
            };

            // Update
            await strapi.query('stats').update({ id: currentStats?.id }, { ...updates });
         }

         resolve();
      } catch (error) {
         console.log(error.message);
         reject();
      }
   });

// Generate data
const generateData = user => {
   // Accounts
   genRandomLenArr(2, 3).forEach((el1, index) => {
      setTimeout(async () => {
         try {
            const account = await createAccount(user);
            const accId = account.id;

            // Cards
            genRandomLenArr(1, 2).forEach((el1, index) => {
               setTimeout(async () => {
                  try {
                     await createCard(user, accId);
                  } catch (e) {
                     console.log(e);
                  }
               }, timeout * (index + 1));
            });

            // Transfers
            genRandomLenArr(6, 10).forEach((el1, index) => {
               setTimeout(async () => {
                  try {
                     await createTransfer(user, accId);
                  } catch (e) {
                     console.log(e);
                  }
               }, timeout * (index + 1));
            });

            // Stats
            genRandomLenArr(8, 12).forEach((el1, index) => {
               setTimeout(async () => {
                  try {
                     await createStats(accId);
                  } catch (e) {
                     console.log(e);
                  }
               }, timeout * (index + 1));
            });
         } catch (e) {
            console.log(e);
         }
      }, timeout * (index + 1));
   });

   // Messages
   genRandomLenArr(3, 5).forEach((el1, index) => {
      setTimeout(async () => {
         try {
            await createMessage(user);
         } catch (e) {
            console.log(e);
         }
      }, timeout * (index + 1));
   });
};

module.exports = async () => {
   console.log('Creating dummy data');

   try {
      // Create controlled user
      const doesCtrldExist = await strapi
         .query('user', 'users-permissions')
         .findOne({ email: controlledUserEmail });

      if (!doesCtrldExist) {
         const controlledUser = await createControlledUser();

         generateData(controlledUser);
      }

      // Create 5 other users
      genRandomLenArr(5, 5).forEach((el1, index) => {
         setTimeout(async () => {
            let user = await createUser();

            generateData(user);
         }, timeout * (index + 1));
      });

      console.log('Dummy data created successfully');
   } catch (e) {
      console.log(e);
      return e;
   }
};
