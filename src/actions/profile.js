import axios from 'axios';
import * as actionTypes from './actionTypes';

export function fetchProfile() {
   return dispatch => {
      axios
         .get('/users_data')
         .then(res => res.data)
         .then(data => {
            dispatch({ type: actionTypes.FETCH_PROFILE, data });
         })
         .catch(error => dispatch(fetchProfileStatus(false)));
   };
}

export function fetchProfileStatus(status) {
   return {
      type: actionTypes.FETCH_PROFILE_STATUS,
      status
   };
}

export function changeUserDetails(id, email = '', password = '') {
   return dispatch =>
      new Promise((resolve, reject) => {
         axios(`/users_data/${id}`, {
            method: 'patch',
            headers: { 'Content-Type': 'application/json' },
            data: { email, password }
         })
            .then(res => res.data)
            .then(data => {
               dispatch({ type: actionTypes.USER_CHANGE_DETAILS, id, email, password });
               resolve(data);
            })
            .catch(err => reject(err));
      });
}
