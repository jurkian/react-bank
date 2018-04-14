import React from 'react';
import { connect } from 'react-redux';
import { changeUserDetails } from 'actions/profile';

import SmallFormBox from 'components/UI/FormBoxes/Small';
import Form from './Form';

const ProfileChangeDetails = (props) => {
   return (
      <div className="row panel-content">
         <div className="col-xs-12">
            <SmallFormBox>
               <Form changeUserDetails={props.changeUserDetails} />
            </SmallFormBox>
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

export default connect(null, mapDispatchToProps)(ProfileChangeDetails); 