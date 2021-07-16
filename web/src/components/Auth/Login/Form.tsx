import React from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import SingleModuleButton from 'components/UI/Buttons/SingleModuleButton';

import * as H from 'history';

type Props = {
   history: H.History;
   onLoginSubmit: (identifier: string, password: string) => void;
};

const InnerForm: React.FC<Props> = (props) => {
   const { errors, touched } = props;

   return (
      <Form className="login-form">
         <div>
            <div className="form-group">
               <Field
                  type="email"
                  className="form-control login-input"
                  name="identifier"
                  placeholder="Your email..."
               />
               {touched.identifier && errors.identifier && (
                  <p className="field-invalid">{errors.identifier}</p>
               )}
            </div>

            <div className="form-group">
               <Field
                  type="password"
                  className="form-control password-input"
                  name="password"
                  placeholder="Your password..."
               />
               {touched.password && errors.password && (
                  <p className="field-invalid">{errors.password}</p>
               )}
            </div>

            <div className="checkbox">
               <label>
                  <Field type="checkbox" name="remember" />
                  Keep me signed in
               </label>
            </div>

            <p>
               <Link to="/register">Don't have an account?</Link>
            </p>
         </div>

         <SingleModuleButton text="Log in now" type="submit" />
      </Form>
   );
};

// Wrap our form with the using withFormik HoC
const LoginForm = withFormik({
   // Transform outer props into form values
   mapPropsToValues: (props) => ({ identifier: '', password: '' }),

   // Add a custom validation function (this can be async too!)
   validationSchema: Yup.object().shape({
      identifier: Yup.string().required('Email is required').email('This is not a valid email'),
      password: Yup.string()
         .required('Password is required')
         .min(6, 'Your password has to be at least 6 characters'),
   }),

   // Submission handler
   handleSubmit: (values, { props, setStatus }) => {
      props.onLoginSubmit(values.identifier, values.password);
   },
})(InnerForm);

export default LoginForm;
