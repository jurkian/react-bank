import React from 'react';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import 'components/Common/YupCustomValidations';
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
               <label htmlFor="pin">Enter new PIN</label>

               <Field
                  type="text"
                  id="pin"
                  className="form-control"
                  name="pin"
                  maxLength="4"
                  placeholder="Enter new PIN..."
               />
               {touched.pin && errors.pin && <p>{errors.pin}</p>}
            </div>

            <div className="form-group">
               <label htmlFor="pin-conf">Confirm new PIN</label>

               <Field
                  type="text"
                  id="pin-conf"
                  className="form-control"
                  name="pinConf"
                  maxLength="4"
                  placeholder="Confirm new PIN..."
               />
               {touched.pinConf && errors.pinConf && <p>{errors.pinConf}</p>}
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Change PIN" type="submit" />
      </Form>
   )
};

const PINChangeForm = withFormik({

   // Transform outer props into form values
   mapPropsToValues: props => ({ pin: '', pinConf: '' }),

   validationSchema: Yup.object().shape({
      pin: Yup.number()
         .typeError('PIN must be a number')
         .positive('Please enter a positive number')
         .length(4, 'PIN must be 4 numbers'),

      pinConf: Yup.number()
         // When PIN has any value, activate pinConf validations
         .when('pin', {
            is: val => val && val.toString().length > 0,
            then: Yup.number()
               .required('Please confirm your PIN')
               .typeError('PIN confirmation must be a number')
               .oneOf([Yup.ref('pin')], 'PINs must be the same')
         }),
   }),

   // Submission handler
   handleSubmit: (
      values,
      {
         props,
         setStatus
      }
   ) => {

      const { pin } = values;
      const newPin = parseInt(pin, 10);

      setStatus('Sending...');

      props.changeCardPin(pin)
         .then(data => setStatus('PIN successfully changed!'))
         .catch(error => setStatus('Problems, try again...'));
   },

})(InnerForm);

export default PINChangeForm;