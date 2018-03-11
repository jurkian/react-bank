import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

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
               <label htmlFor="daily-withdrawal-limit">Enter new daily withdrawal limit</label>

               <Field
                  type="text"
                  id="daily-withdrawal-limit"
                  className="form-control"
                  name="dailyWithdrawalLimit"
                  placeholder="New daily withdrawal limit..."
               />
               {touched.dailyWithdrawalLimit && errors.dailyWithdrawalLimit && <p>{errors.dailyWithdrawalLimit}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="daily-online-limit">Enter new daily online limit</label>

               <Field
                  type="text"
                  id="daily-online-limit"
                  className="form-control"
                  name="dailyOnlineLimit"
                  placeholder="New daily online limit..."
               />
               {touched.dailyOnlineLimit && errors.dailyOnlineLimit && <p>{errors.dailyOnlineLimit}</p>}
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Change limits" type="submit" />
      </Form>
   )
};

const LimitsChangeForm = withFormik({

   // Transform outer props into form values
   mapPropsToValues: props => ({ dailyWithdrawalLimit: '', dailyOnlineLimit: '' }),

   validationSchema: Yup.object().shape({
      dailyWithdrawalLimit: Yup.number('Please enter a number')
         .positive('Please enter a positive number'),
      dailyOnlineLimit: Yup.number('Please enter a number')
         .positive('Please enter a positive number'),
   }),

   // Submission handler
   handleSubmit: (
      values,
      {
         props,
         setStatus
      }
   ) => {

      const { dailyOnlineLimit, dailyWithdrawalLimit } = values;

      // DWL = Daily Withdrawal Limit
      // DOL = Daily Online Limit

      // const cardId = this.props.singleCard.id;
      const newDWL = parseInt(dailyOnlineLimit, 10);
      const newDOL = parseInt(dailyWithdrawalLimit, 10);

      // this.props.changeCardLimits(cardId, newDWL, newDOL);

      setStatus('Sending...');

      // Simulate PUT request
      axios(`http://localhost:3001/clients/1`, {
         method: 'get',
         // headers: { 'Content-Type': 'application/json' },
         // data: { email, password, remember }
      })
         .then(res => res.data)
         .then(res => {
            setStatus('Limits successfully changed!');
         })
         .catch(err => {
            setStatus('Problems, try again...');
         });
   },

})(InnerForm);

export default LimitsChangeForm;