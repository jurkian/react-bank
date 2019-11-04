import { loginUser } from 'api/auth';
import * as actionTypes from './actionTypes';

export const setAuthStatus = (status, email = null) => ({
   type: actionTypes.SET_AUTH_STATUS,
   status,
   email
});

export const login = data => async dispatch => {
   try {
      const user = await loginUser(data);

      if (!user) {
         dispatch(setAuthStatus(false));
      }

      dispatch(setAuthStatus(true));

      return Promise.resolve();
   } catch (err) {
      dispatch(setAuthStatus(false));
      return Promise.reject();
   }
};
