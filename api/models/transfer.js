const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema(
   {
      amount: {
         type: Number,
         required: true
      },
      reference: {
         type: String,
         required: true,
         trim: true,
         minlength: 2,
         maxlength: 20
      },
      sender: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User'
      },
      receiver: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User'
      }
   },
   {
      timestamps: true
   }
);

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;
