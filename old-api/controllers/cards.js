// Models
const Card = require('@models/card');

// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');
const { checkUpdatesValid, applyUpdates } = require('@util/updates');

// App

// Get all my cards
exports.getMyCards = async (req, res, next) => {
   try {
      let cards = await Card.find({ owner: req.user._id }).lean();

      if (!cards) {
         throwError('No cards found', 422);
      }

      res.status(200).json(cards);
   } catch (err) {
      passError(err, next);
   }
};

// Get single card
exports.getSingle = async (req, res, next) => {
   try {
      let card = await Card.findOne({ _id: req.params.id, owner: req.user._id }).lean();

      if (!card) {
         throwError('No card found', 422);
      }

      res.status(200).json(card);
   } catch (err) {
      passError(err, next);
   }
};

// Change card's PIN
exports.changePin = async (req, res, next) => {
   try {
      const card = await Card.findOne({ _id: req.params.id, owner: req.user._id });

      if (!card) {
         throwError("Card not found or it doesn't belong to you", 422);
      }

      card.pin = req.body.pin;

      const saved = await card.save();

      if (!saved) {
         throwError('Pin could not be changed', 422);
      }

      res.status(200).json({ status: 'Card pin changed' });
   } catch (err) {
      passError(err, next);
   }
};

// Change card's limits
exports.changeLimits = async (req, res, next) => {
   try {
      const { dailyOnlineLimit, dailyWithdrawalLimit } = req.body;
      const card = await Card.findOne({ _id: req.params.id, owner: req.user._id });

      if (!card) {
         throwError("Card not found or it doesn't belong to you", 422);
      }

      card.dailyOnlineLimit = dailyOnlineLimit;
      card.dailyWithdrawalLimit = dailyWithdrawalLimit;

      const saved = await card.save();

      if (!saved) {
         throwError('Limits could not be changed', 422);
      }

      res.status(200).json({ status: 'Card limits changed' });
   } catch (err) {
      passError(err, next);
   }
};
