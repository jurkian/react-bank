import axios from 'axios';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_STATUS = 'FETCH_PROFILE_STATUS';
export const PROFILE_CHANGE_DETAILS = 'PROFILE_CHANGE_DETAILS';

export function fetchProfile() {
   return function (dispatch) {
      axios.get('http://localhost:3001/clients')
      .then(res => res.data)
      .then(data => {
         dispatch({ type: FETCH_PROFILE, data });
         dispatch(fetchProfileStatus(true));
      })
      .catch(error => {
         dispatch(fetchProfileStatus(0));
      });
   }
}

export function fetchProfileStatus(status) {
   return {
      type: FETCH_PROFILE_STATUS,
      status
   }
}

export function userChangeDetails (id, newEmail, newPassword) {
   return {
      type: PROFILE_CHANGE_DETAILS,
      id,
      newEmail,
      newPassword
   }
}