import React from 'react';
import { Form, Field, withFormik } from 'formik';
import SingleModuleButton from 'components/UI/Buttons/SingleModuleButton';
import validations from './validations';

const InnerForm = props => {
   const { errors, touched } = props;

   return (
      <Form>
         <div>
            <div className="form-group">
               <label htmlFor="source-account">Choose your account</label>

               <Field
                  component="select"
                  className="form-control"
                  id="source-account"
                  name="sourceAcc"
                  placeholder="Your new email..."
               >
                  {props.userAccountsList}
               </Field>

               {touched.sourceAcc && errors.sourceAcc && <p>{errors.sourceAcc}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="payee-acc-number">Recipient's account number</label>

               <Field
                  type="text"
                  className="form-control"
                  id="payee-acc-number"
                  name="payeeAccNumber"
                  maxLength="8"
                  placeholder="Recipient's account number..."
               />
               {touched.payeeAccNumber && errors.payeeAccNumber && <p>{errors.payeeAccNumber}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="payee-sort-code">Recipient's sort code</label>

               <Field
                  type="text"
                  className="form-control"
                  id="payee-sort-code"
                  name="payeeSortcode"
                  maxLength="6"
                  placeholder="Recipient's sort code..."
               />
               {touched.payeeSortcode && errors.payeeSortcode && <p>{errors.payeeSortcode}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="payee-name">Recipient's name</label>

               <Field
                  type="text"
                  className="form-control"
                  id="payee-name"
                  name="payeeName"
                  placeholder="Recipient's name..."
               />
               {touched.payeeName && errors.payeeName && <p>{errors.payeeName}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="payee-address">Recipient's address</label>

               <Field
                  component="textarea"
                  className="form-control"
                  id="payee-address"
                  name="payeeAddress"
                  rows="4"
                  placeholder="Recipient's address..."
               />
               {touched.payeeAddress && errors.payeeAddress && <p>{errors.payeeAddress}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="reference">Reference</label>

               <Field
                  type="text"
                  className="form-control"
                  id="reference"
                  name="reference"
                  maxLength="50"
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
   );
};

// Wrap our form with the using withFormik HoC
const NewTransactionForm = withFormik({
   // Transform outer props into form values
   mapPropsToValues: props => ({
      sourceAcc: props.firstAccId,
      payeeAccNumber: '',
      payeeSortcode: '',
      payeeName: '',
      payeeAddress: '',
      reference: '',
      amount: ''
   }),

   validationSchema: validations,

   // Submission handler
   handleSubmit: (values, { props, setStatus }) => {
      setStatus('Sending...');

      props
         .addTransaction(values)
         .then(data => setStatus('Transfer done!'))
         .catch(error => setStatus('Problems, try again...'));
   }
})(InnerForm);

export default NewTransactionForm;
