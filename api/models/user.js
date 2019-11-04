// const { throwError, passError, handleValidationErrors } = require('@util/errors');
// const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
   username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
   },
   email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
   },
   password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true
   },
   firstName: {
      type: String,
      required: true,
      minlength: 2
   },
   lastName: {
      type: String,
      required: true,
      minlength: 2
   }
});

module.exports = User;
