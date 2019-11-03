const CONFIG = require('@config/config');

const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Models
const User = require('@models/user');

// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');

// App

// Register
exports.register = async (req, res, next) => {
   // Password has already been hashed - in User model
   const user = new User(req.body);

   try {
      await user.save();

      if (!user) {
         throwError('Problems creating a user', 422);
      }

      //  sendWelcomeEmail()
      res.status(201).json({ message: 'User has been created' });
   } catch (err) {
      passError(err, next);
   }
};
