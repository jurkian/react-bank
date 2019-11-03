const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
   {
      number: {
         type: Number,
         required: true
      },
      pin: {
         type: Number,
         required: true
      },
      isActive: {
         type: Boolean,
         default: true
      },
      owner: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User'
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
