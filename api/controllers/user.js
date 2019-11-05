// Models
const User = require('@models/user');

// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');
const { checkUpdatesValid, applyUpdates } = require('@util/updates');

// App

// Get myself
exports.getMyself = async (req, res, next) => {
   try {
      res.status(200).json(req.user.getBasic());
   } catch (err) {
      passError(err, next);
   }
};

// Update myself
exports.updateMyself = async (req, res, next) => {
   try {
      const updates = ['password', 'email', 'phone'];

      // Let the validator check it
      checkUpdatesValid(req, updates);
      applyUpdates(req, req.user);

      await req.user.save();

      res.status(201).json({ message: 'User has been updated' });
   } catch (err) {
      passError(err, next);
   }
};

// Get users count
exports.getUsersCount = async (req, res, next) => {
   try {
      const usersCount = await User.countDocuments();

      res.status(200).json({ data: usersCount });
   } catch (err) {
      passError(err, next);
   }
};
