import React from 'react';
import { Form, Field, withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import SingleModuleButton from 'components/UI/Buttons/SingleModuleButton';

// Shape of form values
interface FormValues {
   dailyOnlineLimit: string;
   dailyWithdrawalLimit: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
   const { errors, touched } = props;

   return (
      <Form>
         <div>
            <div className="form-group">
               <label htmlFor="daily-online-limit">Enter new daily online limit</label>

               <Field
                  type="text"
                  id="daily-online-limit"
                  className="form-control"
                  name="dailyOnlineLimit"
                  placeholder="New daily online limit..."
               />
               {touched.dailyOnlineLimit && errors.dailyOnlineLimit && (
                  <p>{errors.dailyOnlineLimit}</p>
               )}
            </div>

            <div className="form-group">
               <label htmlFor="daily-withdrawal-limit">Enter new daily withdrawal limit</label>

               <Field
                  type="text"
                  id="daily-withdrawal-limit"
                  className="form-control"
                  name="dailyWithdrawalLimit"
                  placeholder="New daily withdrawal limit..."
               />
               {touched.dailyWithdrawalLimit && errors.dailyWithdrawalLimit && (
                  <p>{errors.dailyWithdrawalLimit}</p>
               )}
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Change limits" type="submit" />
      </Form>
   );
};

interface MyFormProps extends FormValues {
   currentOnlineLimit: string;
   currentWithdrawalLimit: string;
   status: string;
   changeCardLimits: (newOnlineLimit: string, newWithdrawalLimit: string) => Promise<any>;
}

// Wrap our form with the using withFormik HoC
const LimitsChangeForm = withFormik<MyFormProps, FormValues>({
   // Transform outer props into form values
   mapPropsToValues: (props) => ({
      dailyOnlineLimit: props.currentOnlineLimit,
      dailyWithdrawalLimit: props.currentWithdrawalLimit,
   }),

   validationSchema: Yup.object().shape({
      dailyWithdrawalLimit: Yup.number()
         .typeError('It must be a number')
         .positive('Please enter a positive number'),
      dailyOnlineLimit: Yup.number()
         .typeError('It must be a number')
         .positive('Please enter a positive number'),
   }),

   // Submission handler
   handleSubmit: (values, { props, setStatus }) => {
      const { dailyOnlineLimit, dailyWithdrawalLimit } = values;

      if (!dailyOnlineLimit && !dailyWithdrawalLimit) {
         setStatus('No limits changed');
         return;
      }

      setStatus('Sending...');

      props
         .changeCardLimits(dailyOnlineLimit, dailyWithdrawalLimit)
         .then((data) => setStatus('Limits successfully changed!'))
         .catch((error) => setStatus('Problems, try again...'));
   },
})(InnerForm);

export default LimitsChangeForm;
