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

      // Send welcome email + verification link (expires in 7 days)
      // sendNotification('email', 'welcome', {
      //    to: user.email,
      //    firstName: user.firstName
      // });

      res.status(201).json({ message: 'User has been created' });
   } catch (err) {
      passError(err, next);
   }
};

// Login user
exports.login = async (req, res, next) => {
   try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });

      if (!user) {
         throwError('A user with this email could not be found', 422);
      }

      let isPassOk = await bcrypt.compare(password, user.password);

      if (!isPassOk) {
         throwError('Wrong password!', 401);
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, CONFIG.jwt_secret_key, {
         expiresIn: '1d'
      });

      res.status(200).json({ token });
   } catch (err) {
      passError(err, next);
   }
};
