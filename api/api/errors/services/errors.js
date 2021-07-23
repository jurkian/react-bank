'use strict';

// Throw error
const throwError = (code, message) => {
   const error = new Error(message);
   error.statusCode = code;

   delete error.stack;
   console.warn(message);

   throw error;
};

// Handle validation errors
// You can pass body, params, whatever you want
const handleValidationErrors = async (toValidate, schema) => {
   const { error, value } = schema.validate(toValidate);

   debugger;

   if (error) {
      console.warn('Validation errors', error.message);
      throwError(400, 'Validations errors. Please check your data again');
   }
};

module.exports = {
   throwError,
   handleValidationErrors
};
