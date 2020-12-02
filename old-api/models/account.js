const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
   {
      type: {
         type: String,
         required: true
      },
      owner: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User'
      },
      isActive: {
         type: Boolean,
         default: true
      },
      sortcode: {
         type: Number,
         required: true,
         minlength: 6,
         maxlength: 6
      },
      number: {
         type: Number,
         required: true,
         minlength: 8,
         maxlength: 8
      },
      currency: {
         type: String,
         required: true
      },
      balance: {
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
