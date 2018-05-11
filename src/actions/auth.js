import axios from 'axios';
import * as actions from 'actions';
import * as actionTypes from './actionTypes';

import getUserInitialData from 'components/Utilities/Firebase/getUserInitialData';

export const authStart = () => {
   return {
      type: actionTypes.AUTH_START
   };
};

export const authSuccess = (idToken, userId) => {
   return {
      type: actionTypes.AUTH_SUCCESS,
      idToken,
      userId
   };
};

export const authFail = error => {
   return {
      type: actionTypes.AUTH_FAIL,
      error
   };
};

// Log user out
export const logout = () => {
   localStorage.removeItem('token');
   localStorage.removeItem('tokenExpirationDate');
   localStorage.removeItem('userId');

   return {
      type: actionTypes.AUTH_LOGOUT
   };
};

// Log out also after expirationTime (1h with Firebase)
export const checkAuthTimeout = expirationTime => {
   return dispatch => {
      setTimeout(() => {
         dispatch(logout());
      }, expirationTime * 1000);
   };
};

export const auth = (email, password, isSignUp) => {
   return dispatch => {
      dispatch(authStart());

      const apiKey = 'AIzaSyBH89-DxQWuo7xVc3zi48h1I6IewVOU0R4';
      const authData = { email, password, returnSecureToken: true };

      const signUpUrlPart = 'signupNewUser';
      const signInUrlPart = 'verifyPassword';

      const authUrlPart = isSignUp ? signUpUrlPart : signInUrlPart;

      return new Promise((resolve, reject) => {
         axios
            .post(
               `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${authUrlPart}?key=${apiKey}`,
               authData
            )
            .then(res => {
               // Auth successful
               const { localId, idToken, expiresIn } = res.data;
               const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

               localStorage.setItem('token', idToken);
               localStorage.setItem('tokenExpirationDate', expirationDate);
               localStorage.setItem('userId', localId);

               // Get initial data from Firestore
               // Continue only if data is available
               getUserInitialData(email).then(data => {
                  dispatch(authSuccess(idToken, localId));
                  dispatch(checkAuthTimeout(expiresIn));

                  dispatch(actions.setUserInitialData(data));

                  resolve();
               });
            })
            .catch(err => {
               dispatch(authFail(err.response.data.error));
            });
      });
   };
};

// Do an auth state check when app loads/reloads
// If there is a token, but expired, do the logout()
// If there is a valid token, log the user in
export const authCheckState = () => {
   return dispatch => {
      const token = localStorage.getItem('token');

      // No token = log out (reset the auth)
      if (!token) {
         dispatch(logout());
      } else {
         const expirationDate = new Date(localStorage.getItem('tokenExpirationDate'));

         // If token expiration date is in the past, it's no longer valid
         // Log out
         if (expirationDate <= new Date()) {
            dispatch(logout());
         } else {
            // Here it's all valid, log the user in
            const userId = localStorage.getItem('userId');

            dispatch(authSuccess(token, userId));
            dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
         }
      }
   };
};
