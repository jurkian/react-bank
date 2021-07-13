import _ from 'lodash';
import { getMyself, updateMyself } from 'api/users';
import * as actionTypes from './actionTypes';

// Get myself
export const getProfile = () => async dispatch => {
   try {
      const data = await getMyself();

      if (!data) {
         dispatch(fetchProfileStatus(false));
         return;
      }

      dispatch({ type: actionTypes.FETCH_PROFILE, data });
   } catch (err) {
      throw new Error('Accounts fetch failed');
   }
};

// Status
export const fetchProfileStatus = status => ({
   type: actionTypes.FETCH_PROFILE_STATUS,
   status
});

// Change user's details
export const changeUserDetails = (
   email = null,
   password = null,
   phone = null
) => async dispatch => {
   try {
      const data = {};

      if (email) {
         data.email = email;
      }

      if (password) {
         data.password = password;
      }

      if (phone) {
         data.phone = phone;
      }

      if (!_.isEmpty(data)) {
         const user = await updateMyself(data);

         if (!user) {
            dispatch(fetchProfileStatus(false));
            return;
         }

         dispatch({
            type: actionTypes.USER_CHANGE_DETAILS
         });
      }
   } catch (err) {
      dispatch(fetchProfileStatus(false));
   }
};
