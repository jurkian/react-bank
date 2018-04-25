import React from 'react';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import SingleModuleButton from 'components/UI/Buttons/SingleModuleButton';

const InnerForm = props => {
   const { errors, touched } = props;

   return (
      <Form className="register-form">
         <div>
            <div className="form-group">
               <Field
                  type="email"
                  className="form-control login-input"
                  name="email"
                  placeholder="Your email..."
               />
               {touched.email && errors.email && <p>{errors.email}</p>}
            </div>

            <div className="form-group">
               <Field
                  type="password"
                  className="form-control password-input"
                  name="password"
                  placeholder="Your password..."
               />
               {touched.password && errors.password && <p>{errors.password}</p>}
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Create your account" type="submit" />
      </Form>
   );
};

// Wrap our form with the using withFormik HoC
const RegisterForm = withFormik({
   // Transform outer props into form values
   mapPropsToValues: props => ({ email: '', password: '' }),

   // Add a custom validation function (this can be async too!)
   validationSchema: Yup.object().shape({
      email: Yup.string()
         .required('Email is required')
         .email('This is not a valid email'),
      password: Yup.string()
         .required('Password is required')
         .min(6, 'Your password has to be at least 6 characters')
   }),

   // Submission handler
   handleSubmit: (values, { props, setStatus }) => {
      const { email, password } = values;

      setStatus('Sending...');

      // If auth is successful, store the token and redirect to panel
      props.onAuth(email, password).then(token => {
         localStorage.setItem('user_token', token);
         props.history.push('/panel');
      });
   }
})(InnerForm);

export default RegisterForm;
