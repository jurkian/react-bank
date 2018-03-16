import React, { Component } from 'react';
import LoginForm from './Form';
import loginIcon from './login-icon.png';
import './style.css';

class Login extends Component {
   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <section className="login module container-module">
                  <section className="login-icon">
                     <div className="icon-container">
                        <img src={loginIcon} className="img-responsive" alt="Login icon" />
                     </div>
                  </section>

                  <LoginForm history={this.props.history} />
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
}

export default Login;