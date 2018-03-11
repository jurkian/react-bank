import Yup from 'yup';

// New transaction validations
export default Yup.object().shape({

   targetAccNumber: Yup.number()
      .required('Please enter the account number')
      .positive('Account must be a positive number')
      .min(8, 'Account must be 8 numbers')
      .max(8, 'Account must be 8 numbers'),

   targetSortCode: Yup.number()
      .required('Please enter the sort code')
      .positive('Sort code must be a positive number')
      .min(6, 'Sort code must be 6 numbers')
      .max(6, 'Sort code must be 6 numbers'),

   targetName: Yup.string()
      .required('Please enter the name')
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be a maximum of 50 characters'),

   targetAddress: Yup.string()
      .required('Please enter the address')
      .min(3, 'Address must be at least 3 characters')
      .max(200, 'Address must be a maximum of 50 characters'),

   reference: Yup.string()
      .required('Please enter the reference')
      .min(2, 'Reference must be at least 2 characters')
      .max(50, 'Reference must be a maximum of 50 characters'),

   amount: Yup.number()
      .required('Please enter the amount')
      .positive('Amount must be a positive number')
});