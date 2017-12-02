import React, { Component } from 'react';
import Formsy from 'formsy-react';
import FormsyInput from '../FormsyInput';
import jwtDecode from 'jwt-decode';

import loginIcon from './login-icon.png';
import './style.css';

import SingleModuleButton from '../Buttons/SingleModuleButton/index';

class Login extends Component {
   constructor() {
      super();

      this.state = ({ validationInfo: '' });
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
                              type="email"
                              placeholder="Your email..."
                              {...loginValidations}
                              required />
                        </div>

                        <div className="form-group">
                           <FormsyInput
                              name="password"
                              className="password-input"
                              type="password"
                              placeholder="Your password..."
                              {...passwordValidations} 
                              required />
                        </div>
                        
                        <div className="checkbox">
                           <label>
                              <input type="checkbox" name="remember" /> Keep me signed in
                           </label>
                        </div>

                        <p className="validation-info">{this.state.validationInfo}</p>
                     </div>

                     <SingleModuleButton text="Log in now" type="submit" />
                  </Formsy>
               </section>
            </div>
         </div>
      );
   }

   componentDidMount() {
      // If user logged in, redirect to panel
      if (localStorage.getItem('user_token')) {
         this.props.history.push('/panel');
      }
   }

   handleFormSubmit(model) {
      const { email, password } = model;

      this.setState({ validationInfo: 'Sending...' });

      // Current fake API doesn't support JWT tokens, so... SIMULATE IT
      // Use GET instead of POST
      fetch(`http://localhost:3001/clients/1`, {
         // method: 'POST',
         // body: JSON.stringify({
         //    'email': email,
         //    'password': password
         // })
      })
      .then(res => res.json())
      .then(res => {

         let decodedToken = jwtDecode(res.token);

         // Check server response
         if (email === decodedToken.email) {

            // Store the token
            localStorage.setItem('user_token', res.token);

            // Redirect to panel
            this.props.history.push('/panel');

         } else {
            // Else show errors
            this.setState({ validationInfo: 'Login unsuccessful' });
         }
      });
   }
}

export default Login;