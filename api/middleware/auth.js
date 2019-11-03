const CONFIG = require('@config/config');
let jwt = require('jsonwebtoken');

const User = require('@models/user');

// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');

// Verify JWT and add user to next requests
const auth = async (req, res, next) => {
   try {
      let token = req.header('Authorization');

      if (!token) {
         throwError('Auth token not available or incorrect', 422);
      }

      token = token.replace('Bearer ', '');

      const decoded = jwt.verify(token, CONFIG.jwt_secret_key);
      const user = await User.findOne({ _id: decoded.id });

      if (!user) {
         throwError('No user found or token is incorrect', 422);
      }

      req.token = token;
      req.user = user;
      next();
   } catch (err) {
      passError(err, next);
   }
};

module.exports = auth;
