import React, { Component } from 'react';
import axios from 'axios';
import Formsy from 'formsy-react';
import FormsyInput from 'components/FormsyFields/input';
import FormsySelect from 'components/FormsyFields/select';

import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

class Help extends Component {
   constructor() {
      super();
      
      this.state = { validationInfo: '' };
   }

   render() {
      const nameValidations = {
         validations: {
            minLength: 1
         },
         validationErrors: {
            minLength: `This field can't be empty`
         }
      }
   
      const emailValidations = {
         validations: {
            isEmail: true,
            minLength: 1
         },
         validationErrors: {
            isEmail: 'This is not a valid email',
            minLength: `This field can't be empty`
         }
      }

      return (
         <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
               <h1 className="text-center">Do you need help?</h1>

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae temporibus quasi natus consectetur illum perferendis commodi neque molestiae recusandae.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae temporibus quasi natus consectetur illum perferendis commodi neque molestiae recusandae.</p>

               <h2>Contact us</h2>

               <Formsy
                  onValidSubmit={this.handleFormSubmit.bind(this)}>

                  <div>
                     <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <FormsyInput
                           name="name"
                           type="text"
                           id="name"
                           placeholder="Your name..."
                           {...nameValidations}
                           required />
                     </div>

                     <div className="form-group">
                        <label htmlFor="email">Your email</label>
                        <FormsyInput
                           name="email"
                           type="text"
                           id="email"
                           placeholder="Your email..."
                           {...emailValidations}
                           required />
                     </div>

                     <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <FormsySelect name="subject" id="subject" value="Subject 1">
                           <option>Subject 1</option>
                           <option>Subject 2</option>
                           <option>Subject 3</option>
                        </FormsySelect>
                     </div>

                     <p className="validation-info">{this.state.validationInfo}</p>
                  </div>

                  <SingleModuleButton text="Send message" type="submit" />
               </Formsy>
            </div>
         </div>
      );
   }

   handleFormSubmit(model) {
      const { name, email, subject } = model;
   
      this.setState({ validationInfo: 'Sending...' });
   
      // Fake endpoint...
      axios(`http://localhost:3001/clients/1`, {
         method: 'get'
      })
      .then(res => res.data)
      .then(res => {
         this.setState({ validationInfo: 'Your message has been sent' });
      });
   }
}
 
export default Help;
