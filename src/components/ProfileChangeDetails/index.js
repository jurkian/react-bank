import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile, changeUserDetails } from 'actions/profile';

import loginIcon from 'components/Login/login-icon.png';
import './style.css';

import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

class ProfileChangeDetails extends Component {
   componentWillMount() {
      this.props.fetchProfile();
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

                        <p className="validation-info">{this.props.validationInfo}</p>
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

      const id = 1;
      const newEmail = this.refs.email.value;
      const newPassword = this.refs.password.value;

      this.props.changeUserDetails(id, newEmail, newPassword);
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