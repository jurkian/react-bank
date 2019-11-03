const faker = require('faker');
const chalk = require('chalk');
const _ = require('lodash');

// Models
const mongoose = require('mongoose');
const User = require('@models/user');
const Card = require('@models/card');
const Message = require('@models/message');
const Transaction = require('@models/transaction');

// Create a user

// For each user
// Create 1-3 cards, add 1-5 messages, add 1-10 transactions with random data

const createUser = () => {
   const user = new User({
      username: faker.lorem.slug(1),
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

// Messages
const createMessage = user => {
   const message = new Message({
      receiver: user._id,
      content: faker.lorem.paragraph(),
      isRead: faker.random.boolean()
   });

   return message.save();
};

// Cards
const createCard = user => {
   const card = new Card({
      number: faker.random.number({ min: 2000000000000000, max: 6000000000000000 }),
      pin: faker.finance.mask(4, false, false),
      isActive: faker.random.boolean(),
      owner: user._id,
      dailyOnlineLimit: faker.random.number({ min: 1, max: 10000 }),
      dailyWithdrawalLimit: faker.random.number({ min: 1, max: 10000 }),
      monthlyOnlineLimit: faker.random.number({ min: 1, max: 10000 }),
      monthlyWithdrawalLimit: faker.random.number({ min: 1, max: 10000 })
   });

   return card.save();
};

// Transactions
const createTransaction = user => {
   const transaction = new Transaction({
      amount: faker.finance.amount(1, 2500, 2),
      reference: faker.lorem.word(3).substring(0, 20),
      sender: user._id,
      receiver: mongoose.Types.ObjectId()
   });

   return transaction.save();
};

module.exports = async () => {
   console.log('Creating dummy data', chalk.green('✓'));

   try {
      _.times(5, async () => {
         let user = await createUser();

         // Messages
         _.times(_.random(1, 5, false), async () => {
            try {
               await createMessage(user);
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

         // Transactions
         _.times(_.random(1, 10, false), async () => {
            try {
               await createTransaction(user);
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
