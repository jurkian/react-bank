// Models
const Message = require('@models/message');

// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');
const { checkUpdatesValid, applyUpdates } = require('@util/updates');

// App

// Get all my messages
exports.getMyMessages = async (req, res, next) => {
   try {
      let messages = await Message.find({ recipient: req.user._id }).lean();

      if (!messages) {
         throwError('No messages found', 422);
      }

      res.status(200).json(messages);
   } catch (err) {
      passError(err, next);
   }
};

// Get single message
exports.getSingle = async (req, res, next) => {
   try {
      let message = await Message.findOne({ _id: req.params.id, recipient: req.user._id }).lean();

      if (!message) {
         throwError('No message found', 422);
      }

      res.status(200).json(message);
   } catch (err) {
      passError(err, next);
   }
};

// Toggle message read
exports.toggleRead = async (req, res, next) => {
   try {
      const message = await Message.findOne({ _id: req.params.id, recipient: req.user._id });

      if (!message) {
         throwError("Message not found or it doesn't belong to you", 422);
      }

      message.isRead = !message.isRead;

      const toggled = await message.save();

      if (!toggled) {
         throwError('Message status not toggled', 422);
      }

      res.status(200).json({ status: 'Message status toggled' });
   } catch (err) {
      passError(err, next);
   }
};

// Remove message
exports.remove = async (req, res, next) => {
   try {
      const message = await Message.findOne({ _id: req.params.id, recipient: req.user._id });

      if (!message) {
         throwError("Message not found or it doesn't belong to you", 422);
      }

      const removed = await message.remove();

      if (!removed) {
         throwError('Message not removed', 422);
      }

      res.status(200).json({ status: 'Message removed' });
   } catch (err) {
      passError(err, next);
   }
};
