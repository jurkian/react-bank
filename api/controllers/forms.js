// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');
const { checkUpdatesValid, applyUpdates } = require('@util/updates');

// App

// Send help form
exports.sendHelpForm = async (req, res, next) => {
   res.status(200).json({ status: 'Form has been sent' });
};
