import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile, changeUserDetails } from 'actions/profile';
import Formsy from 'formsy-react';
import FormsyInput from 'components/FormsyFields/input';

import loginIcon from 'components/Login/login-icon.png';

import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

class ProfileChangeDetails extends Component {
   componentWillMount() {
      this.props.fetchProfile();  
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

                        <p className="validation-info">{this.props.validationInfo}</p>
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

      this.props.changeUserDetails(id, email, password);
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      validationInfo: state.profile.validations.changeDetails
   }
};
   
const mapDispatchToProps = (dispatch) => {
   return {
      changeUserDetails: (id, newEmail, newPassword) => dispatch(changeUserDetails(id, newEmail, newPassword)),
      fetchProfile: () => dispatch(fetchProfile())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ProfileChangeDetails); 