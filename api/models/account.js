const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
   {
      number: {
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
      currentMoney: {
         type: Number,
         required: true
      }
   },
   {
      timestamps: true
   }
);

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
