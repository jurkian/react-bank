// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');
const { checkUpdatesValid, applyUpdates } = require('@util/updates');

// App

// Get all my messages
exports.getMyMessages = async (req, res, next) => {
   res.status(200).json({ messages: [] });
};

// Get single message
exports.getSingle = async (req, res, next) => {};
