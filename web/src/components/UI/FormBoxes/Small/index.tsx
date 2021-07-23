import React from 'react';

import loginIcon from '../login-icon.png';
import './style.scss';

const SmallFormBox: React.FC = (props) => (
   <section className="module small-form-module">
      <section className="login-icon">
         <div className="icon-container">
            <img src={loginIcon} className="img-responsive" alt="Login icon" />
         </div>
      </section>

      {props.children}
   </section>
);

export default SmallFormBox;
