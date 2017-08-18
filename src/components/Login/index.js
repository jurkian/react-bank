import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

class Login extends Component {
   constructor() {
      super();

      this.state = ({ validationInfo: '' })
   }

   render() {
      return (
         <div className="col-xs-12">
            <h1 className="text-center">Log in now</h1>

            <form onSubmit={this.handleFormSubmit.bind(this)}>
               <div className="form-group">
                  <label htmlFor="email">Your email</label>
                  <input type="email" id="email" className="form-control" placeholder="Your email..." ref="email" />
               </div>

               <div className="form-group">
                  <label htmlFor="password">Your password</label>
                  <input type="password" id="password" className="form-control" placeholder="Your password..." ref="password" />
               </div>

               <div className="checkbox">
                  <label>
                     <input type="checkbox" name="remember" /> Keep me signed in
                  </label>
               </div>

               <button type="submit" className="btn btn-primary btn-lg btn-block">Log in now</button>
               <p className="validation-info">{this.state.validationInfo}</p>
            </form>
         </div>
      );
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