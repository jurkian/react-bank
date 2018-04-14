import React from 'react';
import LoginForm from './Form';
import loginIcon from './login-icon.png';
import './style.scss';

const LoginBox = (props) => (
   <section className="login module container-module">
      <section className="login-icon">
         <div className="icon-container">
            <img src={loginIcon} className="img-responsive" alt="Login icon" />
         </div>
      </section>

      <LoginForm history={props.history} />
   </section>
);

export default LoginBox;