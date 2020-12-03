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
      console.log(error.message);
      throw new Error(error);
   }
};

module.exports = {
   throwError,
   handleValidationErrors
};
