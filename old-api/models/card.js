const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
   {
      owner: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User'
      },
      accountId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'Account'
      },
      isActive: {
         type: Boolean,
         default: true
      },
      number: {
         type: Number,
         required: true
      },
      pin: {
         type: Number,
         required: true
      },
      expiresMonth: {
         type: Number,
         required: true
      },
      expiresYear: {
         type: Number,
         required: true
      },
      dailyOnlineLimit: {
         type: Number,
         required: true,
         default: 2000
      },
      dailyWithdrawalLimit: {
         type: Number,
         required: true,
         default: 2000
      },
      monthlyOnlineLimit: {
         type: Number,
         required: true,
         default: 10000
      },
      monthlyWithdrawalLimit: {
         type: Number,
         required: true,
         default: 10000
      }
   },
   {
      timestamps: true
   }
);

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
