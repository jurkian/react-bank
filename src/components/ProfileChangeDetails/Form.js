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
               <Field
                  type="email"
                  className="form-control login-input"
                  name="email"
                  placeholder="Your new email..."
               />
               {touched.email && errors.email && <p>{errors.email}</p>}
            </div>

            <div className="form-group">
               <Field
                  type="password"
                  className="form-control password-input"
                  name="password"
                  placeholder="Enter new password..."
               />
               {touched.password && errors.password && <p>{errors.password}</p>}
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Save details" type="submit" />
      </Form>
   )
};

// Wrap our form with the using withFormik HoC
const ChangeDetailsForm = withFormik({

   // Transform outer props into form values
   mapPropsToValues: props => ({ email: '', password: '' }),

   validationSchema: Yup.object().shape({
      email: Yup.string()
         .email('This is not a valid email'),
      password: Yup.string()
         .min(6, 'Your password has to be at least 6 characters')
   }),

   // Submission handler
   handleSubmit: (
     values,
      {
         props,
         setStatus
      }
   ) => {
      const { email, password } = values;

      if (!email && !password) {
         setStatus('No details changed');
         return;
      }

      setStatus('Sending...');

      props.changeUserDetails(email, password)
         .then(data => setStatus('Details successfully changed!'))
         .catch(error => setStatus('Problems, try again...'));
   },

})(InnerForm);

export default ChangeDetailsForm;