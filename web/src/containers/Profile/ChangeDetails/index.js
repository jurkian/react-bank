import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import SmallFormBox from 'components/UI/FormBoxes/Small';
import Form from './Form';

const ProfileChangeDetails = props => {
   return (
      <div className="row panel-content">
         <div className="col">
            <SmallFormBox>
               <Form changeUserDetails={props.changeUserDetails} userEmail={props.userEmail} />
            </SmallFormBox>
         </div>
      </div>
   );
};

const mapStateToProps = state => {
   return {
      userEmail: state.profile.data.email
   };
};

const mapDispatchToProps = dispatch => {
   return {
      changeUserDetails: (newEmail, newPassword) =>
         dispatch(actions.changeUserDetails(newEmail, newPassword))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChangeDetails);
