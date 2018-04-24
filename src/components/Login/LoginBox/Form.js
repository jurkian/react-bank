import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import SingleModuleButton from 'components/UI/Buttons/SingleModuleButton';
import jwtDecode from 'jwt-decode';

const InnerForm = props => {
   const { errors, touched } = props;

   return (
      <Form className="login-form">
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

            <div className="checkbox">
               <label>
                  <Field type="checkbox" name="remember" />
                  Keep me signed in
               </label>
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Log in now" type="submit" />
      </Form>
   );
};

// Wrap our form with the using withFormik HoC
const LoginForm = withFormik({
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
      const { email, password, remember } = values;

      setStatus('Sending...');

      // Current fake API doesn't support JWT tokens, so... SIMULATE IT
      // Use GET instead of POST
      axios(`http://localhost:3001/users_data/1`, {
         method: 'get'
         // headers: { 'Content-Type': 'application/json' },
         // data: { email, password, remember }
      })
         .then(res => res.data)
         .then(res => {
            let decodedToken = jwtDecode(res.token);

            // Check server response
            if (email === decodedToken.email) {
               // Store the token
               localStorage.setItem('user_token', res.token);

               // Redirect to panel
               props.history.push('/panel');
            } else {
               // Else show errors
               setStatus('Login unsuccessful');
            }
         });
   }
})(InnerForm);

export default LoginForm;
