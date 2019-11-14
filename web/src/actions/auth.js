import { updateAPIConfig } from 'api/base';
import { loginUser, registerUser } from 'api/auth';
import * as actionTypes from './actionTypes';

// Tools
import { setAuthToken } from 'tools';

export const setAuthStatus = (status, email = null) => ({
   type: actionTypes.SET_AUTH_STATUS,
   status,
   email
});

// Login
export const login = data => async dispatch => {
   try {
      const token = await loginUser(data);

      if (!token) {
         dispatch(setAuthStatus(false));
         return;
      }

      setAuthToken(token);
      updateAPIConfig({ authToken: token });
      dispatch(setAuthStatus(true));
   } catch (err) {
      dispatch(setAuthStatus(false));
   }
};

// Register
export const register = data => async dispatch => {
   try {
      const user = await registerUser(data);

      if (!user) {
         dispatch(setAuthStatus(false));
         return;
      }

      dispatch(setAuthStatus(true));
   } catch (err) {
      dispatch(setAuthStatus(false));
   }
};
