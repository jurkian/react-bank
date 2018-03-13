import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import YupCustomValidations from 'components/Common/YupCustomValidations';
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

      // const cardId = this.props.singleCard.id;
      const newPin = parseInt(pin, 10);

      // this.props.changeCardPin(cardId, newPin);

      setStatus('Sending...');

      // Simulate PUT request
      axios(`http://localhost:3001/clients/1`, {
         method: 'get',
         // headers: { 'Content-Type': 'application/json' },
         // data: { email, password, remember }
      })
         .then(res => res.data)
         .then(res => {
            setStatus('PIN successfully changed!');
         })
         .catch(err => {
            setStatus('Problems, try again...');
         });
   },

})(InnerForm);

export default PINChangeForm;