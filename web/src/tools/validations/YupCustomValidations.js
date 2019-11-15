import * as Yup from 'yup';

// Check for exact length of string or number
Yup.addMethod(Yup.mixed, 'length', function(length, msg) {
   return this.test({
      name: 'length',
      message: msg,
      test: value => value && value.toString().length === length
   });
});
