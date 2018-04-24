import axios from 'axios';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_STATUS = 'FETCH_PROFILE_STATUS';
export const USER_CHANGE_DETAILS = 'USER_CHANGE_DETAILS';

export function fetchProfile() {
   return dispatch => {
      axios
         .get('http://localhost:3001/users_data')
         .then(res => res.data)
         .then(data => {
            dispatch({ type: FETCH_PROFILE, data });
            dispatch(fetchProfileStatus(true));
         })
         .catch(error => dispatch(fetchProfileStatus(false)));
   };
}

export function fetchProfileStatus(status) {
   return {
      type: FETCH_PROFILE_STATUS,
      status
   };
}

export function changeUserDetails(id, email = '', password = '') {
   return dispatch =>
      new Promise((resolve, reject) => {
         axios(`http://localhost:3001/users_data/${id}`, {
            method: 'patch',
            headers: { 'Content-Type': 'application/json' },
            data: { email, password }
         })
            .then(res => res.data)
            .then(data => {
               dispatch({ type: USER_CHANGE_DETAILS, id, email, password });
               resolve(data);
            })
            .catch(err => reject(err));
      });
}
