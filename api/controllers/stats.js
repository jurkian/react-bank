// Models
const Account = require('@models/account');
const Stat = require('@models/stat');

// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');
const { format, parse, subDays } = require('date-fns');
// App

// Get stats for specific account
exports.getStats = async (req, res, next) => {
   const { accId, daysPast = 30 } = req.params;

   try {
      // If user has access to the account
      const account = await Account.findOne({
         _id: accId,
         owner: req.user._id
      }).lean();

      if (!account) {
         throwError('You have no access to these stats', 422);
      }

      // Get acc details
      const { type, currency, number } = account;
      const accDetails = { type, currency, number };

      // Set starting date and get stats
      const startingDate = subDays(new Date(), daysPast);
      const stats = await Stat.find({
         accountId: accId,
         date: { $gt: startingDate }
      }).lean();

      // Format date
      stats.forEach(stat => (stat.date = format(stat.date, 'dd/MM/yyyy')));

      res.status(200).json({ accDetails, data: stats });
   } catch (err) {
      passError(err, next);
   }
};
