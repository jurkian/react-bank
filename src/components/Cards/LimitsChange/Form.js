import React from 'react';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import SingleModuleButton from 'components/Buttons/SingleModuleButton';

const InnerForm = props => {
   const { errors, touched } = props;

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
      dailyWithdrawalLimit: Yup.number()
         .typeError('New limit must be a number')
         .positive('Please enter a positive number'),
      dailyOnlineLimit: Yup.number()
         .typeError('New limit must be a number')
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

      const newDWL = parseFloat(dailyOnlineLimit).toFixed(2);
      const newDOL = parseFloat(dailyWithdrawalLimit).toFixed(2);

      if (!newDWL && !newDOL) {
         setStatus('No limits changed');
         return;
      }

      setStatus('Sending...');

      props.changeCardLimits(newDWL, newDOL)
         .then(data => setStatus('Limits successfully changed!'))
         .catch(error => setStatus('Problems, try again...'));
   },

})(InnerForm);

export default LimitsChangeForm;