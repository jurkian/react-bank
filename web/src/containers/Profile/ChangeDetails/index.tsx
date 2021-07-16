import React from 'react';
import { useAppSelector, useAppDispatch } from '@hooks';

import * as actions from 'actions';

import SmallFormBox from 'components/UI/FormBoxes/Small';
import Form from './Form';

type Props = {};

const ProfileChangeDetails: React.FC<Props> = (props) => {
   const dispatch = useAppDispatch();
   const userEmail = useAppSelector((state) => state.profile.data.email);

   const changeUserDetails = (newEmail: string | null, newPassword: string | null) =>
      dispatch(actions.changeUserDetails(newEmail, newPassword));

   return (
      <div className="row panel-content">
         <div className="col">
            <SmallFormBox>
               <Form changeUserDetails={changeUserDetails} userEmail={userEmail} />
            </SmallFormBox>
         </div>
      </div>
   );
};

export default ProfileChangeDetails;
