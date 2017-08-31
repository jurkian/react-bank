import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

import loginIcon from './login-icon.png';
import './style.css';

import SingleModuleButton from '../Buttons/SingleModuleButton/index';

class Login extends Component {
   constructor() {
      super();

      this.state = ({ validationInfo: '' })
   }

   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <section className="login module">
                  <section className="login-icon">
                     <div className="icon-container">
                        <img src={loginIcon} className="img-responsive" alt="Login icon" />
                     </div>
                  </section>

                  <form className="login-form" method="post" onSubmit={this.handleFormSubmit.bind(this)}>
                     <div>
                        <div className="form-group">
                           <input type="email" className="form-control login-input" placeholder="Your email..." ref="email" />
                        </div>
                        <div className="form-group">
                           <input type="password" className="form-control password-input" placeholder="Your password..." ref="password" />
                        </div>
                        <div className="checkbox">
                           <label>
                              <input type="checkbox" name="remember" /> Keep me signed in
                           </label>
                        </div>

                        <p className="validation-info">{this.state.validationInfo}</p>
                     </div>

                     <SingleModuleButton text="Log in now" type="submit" />
                  </form>
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

   handleFormSubmit(e) {
      e.preventDefault();

      this.setState({ validationInfo: 'Sending...' });

      // Current fake API doesn't support JWT tokens, so... SIMULATE IT
      // Use GET instead of POST
      fetch(`http://localhost:3001/clients/1`, {
         // method: 'POST',
         // body: JSON.stringify({
         //    'email': this.refs.email.value,
         //    'password': this.refs.password.value
         // })
      })
      .then(res => res.json())
      .then(res => {

         let formEmail = this.refs.email.value;
         let decodedToken = jwtDecode(res.token);

         // Check server response
         if (formEmail === decodedToken.email) {

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