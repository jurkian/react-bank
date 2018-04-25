import axios from 'axios';
import * as actionTypes from './actionTypes';

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

// Log user out after expirationTime
export const logout = () => {
   return {
      type: actionTypes.AUTH_LOGOUT
   };
};

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
               const { localId, idToken, expiresIn } = res.data;

               dispatch(authSuccess(idToken, localId));
               dispatch(checkAuthTimeout(expiresIn));

               resolve(idToken);
            })
            .catch(err => {
               dispatch(authFail(err.response.data.error));
            });
      });
   };
};
