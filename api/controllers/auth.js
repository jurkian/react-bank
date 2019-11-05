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

      // Send welcome email
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

      res.status(200).json(token);
   } catch (err) {
      passError(err, next);
   }
};

// Remind password
// Step 1 - send verification link
exports.remindPassword = async (req, res, next) => {
   try {
      const { email } = req.body;
      let token = await crypto.randomBytes(16).toString('hex');
      let user = await User.findOne({ email });

      if (!user) {
         throwError('No account with that email found', 401);
      }

      let expireTime = new Date();

      expireTime.setDate(expireTime.getDate() + 7);
      user.resetToken = token;
      user.resetTokenExpiration = expireTime;

      await user.save();

      // Send pass remind notification
      // sendNotification('email', 'password-remind', {
      //    to: user.email
      // });

      res.status(200).json({ status: 'Verification link sent' });
   } catch (err) {
      passError(err, next);
   }
};

// Set new user's password
// Step 2
exports.resetPassword = async (req, res, next) => {
   try {
      const { email, password, token } = req.body;
      let user = await User.findOne({
         email,
         resetToken: token,
         resetTokenExpiration: { $gte: Date.now() }
      });

      if (!user) {
         throwError('No user found or token has expired', 401);
      }

      user.password = password;
      user.resetToken = undefined;
      user.resetTokenExpiration = undefined;

      await user.save();

      // Send pass reset notification
      // sendNotification('email', 'password-reset', {
      //    to: user.email,
      //    firstName: user.firstName
      // });

      res.status(200).json({ status: 'New password has been set' });
   } catch (err) {
      passError(err, next);
   }
};
