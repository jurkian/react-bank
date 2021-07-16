import React from 'react';
import { Form, Field, withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import 'tools/validations/YupCustomValidations';
import SingleModuleButton from 'components/UI/Buttons/SingleModuleButton';

// Shape of form values
interface FormValues {
   pin: string;
   pinConf: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
   const { errors, touched } = props;

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
               {touched.pin && errors.pin && <p className="field-invalid">{errors.pin}</p>}
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
               {touched.pinConf && errors.pinConf && (
                  <p className="field-invalid">{errors.pinConf}</p>
               )}
            </div>

            <p className="validation-info">{props.status}</p>
         </div>

         <SingleModuleButton text="Change PIN" type="submit" />
      </Form>
   );
};

interface MyFormProps extends FormValues {
   changeCardPin: (pin: number) => Promise<any>;
}

// Wrap our form with the using withFormik HoC
const PINChangeForm = withFormik<MyFormProps, FormValues>({
   // Transform outer props into form values
   mapPropsToValues: (props) => ({ pin: '', pinConf: '' }),

   validationSchema: Yup.object().shape({
      pin: Yup.number()
         .typeError('PIN must be a number')
         .positive('Please enter a positive number')
         .integer('PIN must be an integer')
         .length(4, 'PIN must be 4 numbers'),

      pinConf: Yup.number()
         // When PIN has any value, activate pinConf validations
         .when('pin', {
            is: (val: number) => val && val.toString().length > 0,
            then: Yup.number()
               .required('Please confirm your PIN')
               .typeError('PIN confirmation must be a number')
               .oneOf([Yup.ref('pin')], 'PINs must be the same'),
         }),
   }),

   // Submission handler
   handleSubmit: (values, { props, setStatus }) => {
      const pin = parseInt(values.pin, 10);

      if (!pin) {
         setStatus('No PIN changed');
         return;
      }

      setStatus('Sending...');

      props
         .changeCardPin(pin)
         .then((data) => setStatus('PIN successfully changed!'))
         .catch((error) => setStatus('Problems, try again...'));
   },
})(InnerForm);

export default PINChangeForm;
