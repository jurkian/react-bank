import React from 'react';
import { Form, Field, withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import SingleModuleButton from 'components/UI/Buttons/SingleModuleButton';

// API
import { sendHelpForm } from 'api/forms';

interface FormValues {
   name: string;
   email: string;
   subject: string;
   message: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
   const { errors, touched } = props;

   return (
      <Form>
         <div>
            <div className="form-group">
               <label htmlFor="name">Your name</label>
               <Field
                  id="name"
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your name..."
               />

               {touched.name && errors.name && <p className="field-invalid">{errors.name}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="email">Your email</label>
               <Field
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your email..."
               />

               {touched.email && errors.email && <p className="field-invalid">{errors.email}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="subject">Subject</label>
               <Field id="subject" component="select" className="form-control" name="subject">
                  <option value="" disabled>
                     Choose subject
                  </option>
                  <option>Subject 1</option>
                  <option>Subject 2</option>
                  <option>Subject 3</option>
               </Field>

               {touched.subject && errors.subject && (
                  <p className="field-invalid">{errors.subject}</p>
               )}
            </div>

            <div className="form-group">
               <label htmlFor="message">Message</label>
               <Field
                  id="message"
                  component="textarea"
                  rows="6"
                  className="form-control"
                  name="message"
               />

               {touched.message && errors.message && (
                  <p className="field-invalid">{errors.message}</p>
               )}
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Send message" type="submit" />
      </Form>
   );
};

interface MyFormProps extends FormValues {}

// Wrap our form with the using withFormik HoC
const ContactForm = withFormik<MyFormProps, FormValues>({
   // Transform outer props into form values
   mapPropsToValues: (props) => ({
      name: '',
      email: '',
      subject: '',
      message: '',
   }),

   // Add a custom validation function (this can be async too!)
   validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Email is required').email('This is not a valid email'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string()
         .required('Message is required')
         .min(6, 'Please enter at least 6 characters'),
   }),

   // Submission handler
   handleSubmit: (values, { props, setStatus }) => {
      const { name, email, subject, message } = values;

      setStatus('Sending...');

      sendHelpForm({ name, email, subject, message })
         .then((res) => res.data)
         .then((res) => setStatus('Your message has been sent'))
         .catch((err) => setStatus('Your message has been sent'));
   },
})(InnerForm);

export default ContactForm;
