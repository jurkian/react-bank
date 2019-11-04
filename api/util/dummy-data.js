const faker = require('faker');
const chalk = require('chalk');
const _ = require('lodash');

const mongoose = require('mongoose');

// Models
const Account = require('@models/account');
const User = require('@models/user');
const Card = require('@models/card');
const Message = require('@models/message');
const Transfer = require('@models/transfer');

// Create a user

// For each user
// Create 1-2 accounts, 1-3 cards, add 1-5 messages, add 1-10 transfers with random data

const createUser = () => {
   const user = new User({
      email: faker.internet.email(),
      password: 'admin123',
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      dateOfBirth: faker.date.between('1960-01-01', '2000-12-31'),
      phone: faker.phone.phoneNumberFormat(1),
      picture: faker.internet.avatar(),
      streetAddr: faker.address.streetAddress(),
      postcode: faker.address.zipCode(),
      city: faker.address.city()
   });

   return user.save();
};

// Accounts
const createAccount = user => {
   const account = new Account({
      owner: user._id,
      isActive: faker.random.boolean(),
      sortcode: faker.finance.mask(6, false, false),
      number: faker.finance.mask(8, false, false),
      currency: faker.finance.currencyCode(),
      balance: faker.finance.amount(1, 10000, 2)
   });

   return account.save();
};

// Cards
const createCard = user => {
   const card = new Card({
      owner: user._id,
      isActive: faker.random.boolean(),
      number: faker.finance.mask(16, false, false),
      pin: faker.finance.mask(4, false, false),
      expiresMonth: faker.random.number({ min: 1, max: 12 }),
      expiresYear: faker.random.number({ min: 2020, max: 2030 }),
      dailyOnlineLimit: faker.random.number({ min: 1, max: 10000 }),
      dailyWithdrawalLimit: faker.random.number({ min: 1, max: 10000 }),
      monthlyOnlineLimit: faker.random.number({ min: 1, max: 10000 }),
      monthlyWithdrawalLimit: faker.random.number({ min: 1, max: 10000 })
   });

   return card.save();
};

// Transfers
const createTransfer = user => {
   const transfer = new Transfer({
      type: faker.random.arrayElement(['normal', 'turbo']),
      payeeName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      date: faker.date.between('2020-01-01', '2020-12-31'),
      amount: faker.finance.amount(1, 2500, 2),
      status: faker.random.arrayElement(['planned', 'done']),
      reference: faker.lorem.words(3).substring(0, 20),
      sender: user._id,
      recipient: mongoose.Types.ObjectId()
   });

   return transfer.save();
};

// Messages
const createMessage = user => {
   const message = new Message({
      title: faker.lorem.words(5),
      sentDate: faker.date.between('2020-01-01', '2020-12-31'),
      recipient: user._id,
      content: faker.lorem.paragraph(),
      isRead: faker.random.boolean()
   });

   return message.save();
};

module.exports = async () => {
   console.log('Creating dummy data', chalk.green('✓'));

   try {
      _.times(5, async () => {
         let user = await createUser();

         // Accounts
         _.times(_.random(1, 2, false), async () => {
            try {
               await createAccount(user);
            } catch (e) {
               console.log(e);
            }
         });

         // Cards
         _.times(_.random(1, 3, false), async () => {
            try {
               await createCard(user);
            } catch (e) {
               console.log(e);
            }
         });

         // Transfers
         _.times(_.random(1, 10, false), async () => {
            try {
               await createTransfer(user);
            } catch (e) {
               console.log(e);
            }
         });

         // Messages
         _.times(_.random(1, 5, false), async () => {
            try {
               await createMessage(user);
            } catch (e) {
               console.log(e);
            }
         });
      });

      return true;
   } catch (e) {
      console.log(e);
      return e;
   }
};
