import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
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

   /*
      Validations:
      pin = positive number,
      pinConf = equals to pin
   */
   validationSchema: Yup.object().shape({
      pin: Yup.number('Please enter a number')
         .positive('Please enter a positive number')
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