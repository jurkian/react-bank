import * as actionTypes from './actionTypes';

export function setUserInitialData(data) {
   return {
      type: actionTypes.SET_USER_INITIAL_DATA,
      data
   };
}
