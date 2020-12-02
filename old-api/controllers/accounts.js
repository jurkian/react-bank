// Models
const Account = require('@models/account');

// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');
const { checkUpdatesValid, applyUpdates } = require('@util/updates');

// App

// Get all my accounts
exports.getMyAccounts = async (req, res, next) => {
   try {
      let accounts = await Account.find({ owner: req.user._id }).lean();

      if (!accounts) {
         throwError('No accounts found', 422);
      }

      res.status(200).json(accounts);
   } catch (err) {
      passError(err, next);
   }
};

// Get single account
exports.getSingle = async (req, res, next) => {
   try {
      let account = await Accounts.findOne({ _id: req.params.id, owner: req.user._id }).lean();

      if (!account) {
         throwError('No account found', 422);
      }

      res.status(200).json(account);
   } catch (err) {
      passError(err, next);
   }
};
