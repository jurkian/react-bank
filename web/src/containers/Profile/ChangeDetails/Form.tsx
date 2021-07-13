import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import SingleModuleButton from 'components/UI/Buttons/SingleModuleButton';

const InnerForm = props => {
   const { errors, touched } = props;

   return (
      <Form>
         <div>
            <p>If you want to change email, please contact the administrator.</p>
            <p>Below you can change your password</p>

            <div className="form-group">
               <Field type="email" className="form-control login-input" name="email" disabled />
            </div>

            <div className="form-group">
               <Field
                  type="password"
                  className="form-control password-input"
                  name="password"
                  placeholder="Enter new password..."
               />
               {touched.password && errors.password && (
                  <p className="field-invalid">{errors.password}</p>
               )}
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Save details" type="submit" />
      </Form>
   );
};

// Wrap our form with the using withFormik HoC
const ChangeDetailsForm = withFormik({
   // Transform outer props into form values
   mapPropsToValues: props => ({ email: props.userEmail, password: '' }),

   validationSchema: Yup.object().shape({
      email: Yup.string().email('This is not a valid email'),
      password: Yup.string().min(6, 'Your password has to be at least 6 characters')
   }),

   // Submission handler
   handleSubmit: (values, { props, setStatus }) => {
      const { email, password } = values;

      if (!password) {
         setStatus('No details changed');
         return;
      }

      setStatus('Sending...');

      props
         .changeUserDetails(email, password)
         .then(() => setStatus('Details successfully changed!'))
         .catch(error => setStatus('Problems... please log out and try again'));
   }
})(InnerForm);

export default ChangeDetailsForm;
