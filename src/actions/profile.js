import axios from 'axios';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_STATUS = 'FETCH_PROFILE_STATUS';
export const USER_CHANGE_DETAILS = 'USER_CHANGE_DETAILS';
export const USER_CHANGE_DETAILS_STATUS = 'USER_CHANGE_DETAILS_STATUS';

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

export function changeUserDetails(id, newEmail, newPassword) {
   return function (dispatch) {
      dispatch(changeUserDetailsStatus('Saving...'));

      // No password change yet - needs to be hashed
      axios(`http://localhost:3001/clients/${id}`, {
         method: 'patch',
         headers: { 'Content-Type': 'application/json' },
         data: { email: newEmail }
      })
      .then(res => res.data)
      .then(data => {
         dispatch({ type: USER_CHANGE_DETAILS, id, newEmail, newPassword });
         dispatch(changeUserDetailsStatus('Changes saved'));
      })
      .catch(error => {
         dispatch(changeUserDetailsStatus('Problems... try again'));
      });
   }
}

export function changeUserDetailsStatus(status) {
   return {
      type: USER_CHANGE_DETAILS_STATUS,
      status
   }
}