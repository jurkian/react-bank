const mongoose = require('mongoose');
const validator = require('validator');

const Transaction = mongoose.model('Transaction', {
   date: {
      type: Date,
      required: true
   }
});

module.exports = Transaction;
