import React from 'react';
import { connect } from 'react-redux';
import { changeUserDetails } from 'actions/profile';
import Form from './Form';

import loginIcon from 'components/Login/login-icon.png';

const ProfileChangeDetails = (props) => {
   return (
      <div className="row panel-content">
         <div className="col-xs-12">
            <section className="login module">
               <section className="login-icon">
                  <div className="icon-container">
                     <img src={loginIcon} className="img-responsive" alt="Login icon" />
                  </div>
               </section>

               <Form changeUserDetails={props.changeUserDetails} />
            </section>
         </div>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      changeUserDetails: (newEmail, newPassword) =>
         dispatch(changeUserDetails(1, newEmail, newPassword))
   }
}

export default connect(
   null,
   mapDispatchToProps
)(ProfileChangeDetails); 