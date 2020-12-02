const { validationResult } = require('express-validator/check');

// Throw error
module.exports.throwError = (message, code) => {
   const error = new Error(message);
   error.statusCode = code;

   throw error;
};

// Throw validation error
module.exports.handleValidationErrors = (req, message) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
      const error = new Error(message || 'Validation failed');

      error.statusCode = 422;
      error.data = errors.array();

      throw error;
   }
};

// Pass error to another handler
module.exports.passError = (err, next) => {
   if (!err.statusCode) {
      err.statusCode = 500;
   }

   console.log(err);

   if (next) {
      next(err);
   }
};
