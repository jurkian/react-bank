import React from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import Yup from 'yup';
import SingleModuleButton from 'components/UI/Buttons/SingleModuleButton';

const InnerForm = props => {
   const { errors, touched } = props;

   return (
      <Form className="register-form">
         <div>
            <p>
               <b>Registration is currently inactive</b>
            </p>

            <p>
               <Link to="/login">Already have an account?</Link>
            </p>
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
      props.onRegisterSubmit(values.email, values.password);
   }
})(InnerForm);

export default RegisterForm;
