// Models
const User = require('@models/user');

// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');
const { checkUpdatesValid, applyUpdates } = require('@util/updates');

// App

// Get users count
exports.countUsers = async (req, res, next) => {
   try {
      const usersCount = await User.countDocuments();

      res.status(200).json({ data: usersCount });
   } catch (err) {
      passError(err, next);
   }
};
