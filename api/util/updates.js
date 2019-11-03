const { throwError, passError, handleValidationErrors } = require('@util/errors');

exports.checkUpdatesValid = (req = {}, allowedUpdates = []) => {
   const updates = Object.keys(req.body);
   const isValidOperation = updates.every(update => allowedUpdates.includes(update));

   if (!isValidOperation) {
      throwError('Invalid updates', 400);
   }

   return;
};

exports.applyUpdates = (req, to = {}) => {
   Object.keys(req.body).forEach(update => (to[update] = req.body[update]));
};
