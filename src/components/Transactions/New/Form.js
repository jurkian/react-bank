import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';
import validations from './validations';

const InnerForm = props => {
   const {
      values,
      errors,
      touched,
      dirty,
      handleChange,
      handleBlur,
      handleReset,
      handleSubmit,
      isSubmitting
   } = props;

   return (
      <Form>
         <div>

            <div className="form-group">
               <label htmlFor="user-account">Choose your account</label>

               <Field
                  component="select"
                  className="form-control"
                  id="user-account"
                  name="userAccount"
                  placeholder="Your new email..."
               >{props.userAccountsList}</Field>
               {touched.userAccount && errors.userAccount && <p>{errors.userAccount}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="target-acc-number">Recipient's account number</label>

               <Field
                  type="text"
                  className="form-control"
                  id="target-acc-number"
                  name="targetAccNumber"
                  maxLength="8"
                  placeholder="Recipient's account number..."
               />
               {touched.targetAccNumber && errors.targetAccNumber && <p>{errors.targetAccNumber}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="target-sort-code">Recipient's sort code</label>

               <Field
                  type="text"
                  className="form-control"
                  id="target-sort-code"
                  name="targetSortCode"
                  maxLength="6"
                  placeholder="Recipient's sort code..."
               />
               {touched.targetSortCode && errors.targetSortCode && <p>{errors.targetSortCode}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="target-name">Recipient's name</label>

               <Field
                  type="text"
                  className="form-control"
                  id="target-name"
                  name="targetName"
                  placeholder="Recipient's name..."
               />
               {touched.targetName && errors.targetName && <p>{errors.targetName}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="target-address">Recipient's address</label>

               <Field
                  component="textarea"
                  className="form-control"
                  id="target-address"
                  name="targetAddress"
                  rows="4"
                  placeholder="Recipient's address..."
               />
               {touched.targetAddress && errors.targetAddress && <p>{errors.targetAddress}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="reference">Reference</label>

               <Field
                  type="text"
                  className="form-control"
                  id="reference"
                  name="reference"
                  placeholder="Reference..."
               />
               {touched.reference && errors.reference && <p>{errors.reference}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="amount">Amount</label>

               <Field
                  type="text"
                  className="form-control"
                  id="amount"
                  name="amount"
                  placeholder="Amount..."
               />
               {touched.amount && errors.amount && <p>{errors.amount}</p>}
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Confirm transfer" type="submit" />
      </Form>
   )
};

// Wrap our form with the using withFormik HoC
const NewTransactionForm = withFormik({

   // Transform outer props into form values
   mapPropsToValues: props => ({
      userAccount: '',
      targetAccNumber: '',
      targetSortCode: '',
      targetName: '',
      targetAddress: '',
      reference: '',
      amount: ''
   }),

   validationSchema: validations,

   // Submission handler
   handleSubmit: (
      values,
      {
         props,
         setStatus
      }
   ) => {

      const {
         userAccount,
         targetAccNumber,
         targetSortCode,
         targetName,
         targetAddress,
         reference,
         amount
      } = values;

      setStatus('Sending...');

      axios(`http://localhost:3001/transactions`, {
         method: 'post',
         headers: { 'Content-Type': 'application/json' },
         data: {
            date: '24/07/2017 22:38',
            amount,
            payee: 'John Laboune',
            type: 'Transfer',
            status: 'Done'
         }
      })
         .then(res => res.data)
         .then(res => {
            setStatus('Transfer done');
         })
         .catch(err => {
            setStatus('Problems, try again...');
         });
   },

})(InnerForm);

export default NewTransactionForm;