// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');
const { checkUpdatesValid, applyUpdates } = require('@util/updates');

// App

// Get all my cards
exports.getMyCards = async (req, res, next) => {
   res.status(200).json({ cards: [] });
};

// Get single card
exports.getSingle = async (req, res, next) => {};

// Update a card
exports.update = async (req, res, next) => {};
