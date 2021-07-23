import React from 'react';
import { Form, Field, withFormik, FormikProps } from 'formik';
import SingleModuleButton from 'components/UI/Buttons/SingleModuleButton';
import validations from './validations';

interface FormValues {
   sourceAccountId: string;
   payeeAccNumber: string;
   payeeSortcode: string;
   payeeName: string;
   payeeAddress: string;
   reference: string;
   amount: string;
   userAccountsList: any;
}

const InnerForm = (props: FormikProps<FormValues>) => {
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
                  name="sourceAccountId"
                  placeholder="Your new email..."
               >
                  {props.userAccountsList}
               </Field>
               {touched.sourceAccountId && errors.sourceAccountId && (
                  <p>{errors.sourceAccountId}</p>
               )}
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
               {touched.payeeAccNumber && errors.payeeAccNumber && (
                  <p className="field-invalid">{errors.payeeAccNumber}</p>
               )}
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
               {touched.payeeSortcode && errors.payeeSortcode && (
                  <p className="field-invalid">{errors.payeeSortcode}</p>
               )}
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
               {touched.payeeName && errors.payeeName && (
                  <p className="field-invalid">{errors.payeeName}</p>
               )}
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
               {touched.payeeAddress && errors.payeeAddress && (
                  <p className="field-invalid">{errors.payeeAddress}</p>
               )}
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
               {touched.reference && errors.reference && (
                  <p className="field-invalid">{errors.reference}</p>
               )}
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
               {touched.amount && errors.amount && <p className="field-invalid">{errors.amount}</p>}
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Confirm transfer" type="submit" />
      </Form>
   );
};

interface MyFormProps extends FormValues {
   userId: string;
   firstAccId: string;
   addTransfer: (data: {}) => Promise<any>;
}

// Wrap our form with the using withFormik HoC
const NewTransferForm = withFormik<MyFormProps, FormValues>({
   // Transform outer props into form values
   mapPropsToValues: (props) => ({
      sourceAccountId: props.firstAccId,
      payeeAccNumber: '',
      payeeSortcode: '',
      payeeName: '',
      payeeAddress: '',
      reference: '',
      amount: '',
      userAccountsList: props.userAccountsList,
   }),

   validationSchema: validations,

   // Submission handler
   handleSubmit: (values, { props, setStatus }) => {
      // Prepare some data for API
      const data = {
         ...values,
         sender: props.userId,
         recipient: props.userId,
      };

      setStatus('Sending...');

      props
         .addTransfer(data)
         .then((data) => setStatus('Transfer done!'))
         .catch((error) => setStatus('Problems, try again...'));
   },
})(InnerForm);

export default NewTransferForm;
