import React, { Component } from 'react';
import axios from 'axios';
import Formsy from 'formsy-react';
import FormsyInput from 'components/FormsyFields/input';

import loginIcon from 'components/Login/login-icon.png';
import './style.css';

import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

class ProfileChangeDetails extends Component {
   constructor() {
      super();
      
      this.state = { validationInfo: '' };
   }
   
   render() {
      const loginValidations = {
         validations: {
            isEmail: true
         },
         validationErrors: {
            isEmail: 'This is not a valid email'
         }
      }

      const passwordValidations = {
         validations: {
            minLength: 6
         },
         validationErrors: {
            minLength: 'Your password has to be at least 6 characters'
         }
      }

      return (
         <div className="row">
            <div className="col-xs-12">
               <section className="login module">
                  <section className="login-icon">
                     <div className="icon-container">
                        <img src={loginIcon} className="img-responsive" alt="Login icon" />
                     </div>
                  </section>

                  <Formsy
                     className="login-form"
                     onValidSubmit={this.handleFormSubmit.bind(this)}>

                     <div>
                        <div className="form-group">
                           <FormsyInput
                              name="email"
                              className="login-input"
                              type="text"
                              placeholder="Your new email..."
                              {...loginValidations}
                              required />
                        </div>

                        <div className="form-group">
                           <FormsyInput
                              name="password"
                              className="password-input"
                              type="password"
                              placeholder="Enter new password..."
                              {...passwordValidations} 
                              required />
                        </div>

                        <p className="validation-info">{this.state.validationInfo}</p>
                     </div>

                     <SingleModuleButton text="Save changes" type="submit" />
                  </Formsy>
               </section>
            </div>
         </div>
      );
   }

   handleFormSubmit(model) {
      const id = 1;
      const { email, password } = model;
   
      this.setState({ validationInfo: 'Sending...' });
   
      axios(`http://localhost:3001/clients/${id}`, {
         method: 'patch',
         headers: { 'Content-Type': 'application/json' },
         data: { email }
      })
      .then(res => res.data)
      .then(res => {
         this.setState({ validationInfo: 'Your details successfully changed' });
      });
   }
}

export default ProfileChangeDetails;