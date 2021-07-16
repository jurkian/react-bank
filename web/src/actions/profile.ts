import _ from 'lodash';
import { getMyself, updateMyself } from 'api/users';
import * as actionTypes from './actionTypes';

import { AppDispatch } from 'store';

// Get myself
export const getProfile = () => async (dispatch: AppDispatch) => {
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
export const fetchProfileStatus = (status: boolean) => ({
   type: actionTypes.FETCH_PROFILE_STATUS,
   status,
});

type UserDetails = {
   email?: string | null;
   password?: string | null;
   phone?: string | null;
};

// Change user's details
export const changeUserDetails =
   (email: string | null = null, password: string | null = null, phone: string | null = null) =>
   async (dispatch: AppDispatch) => {
      try {
         const data: UserDetails = {};

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
               type: actionTypes.USER_CHANGE_DETAILS,
            });
         }
      } catch (err) {
         dispatch(fetchProfileStatus(false));
      }
   };
