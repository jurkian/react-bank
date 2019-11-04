const mongoose = require('mongoose');
const validator = require('validator');

const Card = mongoose.model('Card', {
   number: {
      type: Number,
      required: true
   },
   isActive: {
      type: Boolean,
      default: true
   }
});

module.exports = Card;
