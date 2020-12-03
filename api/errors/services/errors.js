'use strict';

// Throw error
const throwError = (code, message) => {
   const error = new Error(message);
   error.statusCode = code;

   delete error.stack;
   console.warn(message);

   throw error;
};

module.exports = {
   throwError
};
