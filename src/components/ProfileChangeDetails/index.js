import React, { Component } from 'react';

import loginIcon from 'components/Login/login-icon.png';
import './style.css';

import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

class ProfileChangeDetails extends Component {
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
                           <input type="email" className="form-control login-input" placeholder="Your new email..." ref="email" />
                        </div>
                        <div className="form-group">
                           <input type="password" className="form-control password-input" placeholder="Enter new password..." ref="password" />
                        </div>

                        <p className="validation-info">{this.state.validationInfo}</p>
                     </div>

                     <SingleModuleButton text="Save changes" type="submit" />
                  </form>
               </section>
            </div>
         </div>
      );
   }

   handleFormSubmit(e) {
      e.preventDefault();

      this.setState({ validationInfo: 'Saving...' });
   }
}

export default ProfileChangeDetails;