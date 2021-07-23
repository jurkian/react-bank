import { updateAPIConfig } from 'api/base';
import { loginUser, registerUser } from 'api/auth';
import * as actionTypes from './actionTypes';

import { AppDispatch } from 'store';

// Tools
import { setAuthToken } from 'tools';

export const setAuthStatus = (status: boolean, email: string = '') => ({
   type: actionTypes.SET_AUTH_STATUS,
   status,
   email,
});

type UserData = {
   jwt: string;
};

// Login
export const login = (data: {}) => async (dispatch: AppDispatch) => {
   try {
      const userData: UserData = await loginUser(data);

      if (!userData) {
         dispatch(setAuthStatus(false));
         return;
      }

      setAuthToken(userData.jwt);
      updateAPIConfig({ authToken: userData.jwt });
      dispatch(setAuthStatus(true));
   } catch (err) {
      dispatch(setAuthStatus(false));
   }
};

// Register
export const register = (data: {}) => async (dispatch: AppDispatch) => {
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
