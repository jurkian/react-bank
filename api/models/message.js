const mongoose = require('mongoose');
const validator = require('validator');

const Message = mongoose.model('Message', {
   content: {
      type: String,
      required: true
   },
   isRead: {
      type: Boolean,
      default: false
   }
});

module.exports = Message;
