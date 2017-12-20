export const targetAccNumberValidations = {
   validations: {
      isLength: 8,
      isNumeric: true
   },
   validationErrors: {
      isLength: 'Account number must be 8 numbers',
      isNumeric: 'Account numer must be a number'
   }
};

export const targetSortCodeValidations = {
   validations: {
      isLength: 6,
      isNumeric: true
   },
   validationErrors: {
      isLength: 'Sort code must be 6 numbers',
      isNumeric: 'Sort code must be a number'
   }
};

export const targetNameValidations = {
   validations: {
      minLength: 2,
      maxLength: 50
   },
   validationErrors: {
      minLength: 'Name must be at least 2 characters',
      maxLength: 'Name must be a maximum of 50 characters',
   }
};

export const targetAddressValidations = {
   validations: {
      minLength: 3,
      maxLength: 200
   },
   validationErrors: {
      minLength: 'Address must be at least 3 characters',
      maxLength: 'Address must be a maximum of 200 characters'
   }
};

export const referenceValidations = {
   validations: {
      minLength: 2,
      maxLength: 50
   },
   validationErrors: {
      minLength: 'Reference must be at least 2 characters',
      maxLength: 'Reference must be a maximum of 50 characters'
   }
};

export const amountValidations = {
   validations: {
      isNumeric: true
   },
   validationErrors: {
      isNumeric: 'Amount must be a number'
   }
};