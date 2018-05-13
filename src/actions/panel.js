import * as actionTypes from './actionTypes';
import getUserInitialData from 'tools/firebase/getUserInitialData';

export function fetchInitialData(userEmail) {
   return dispatch => {
      getUserInitialData(userEmail)
         .then(data => {
            // Set initial data
            dispatch({ type: actionTypes.FETCH_ACCOUNTS, data: data.accounts });
            dispatch({ type: actionTypes.FETCH_TRANSACTIONS, data: data.transactions, page: 1 });
            dispatch({ type: actionTypes.FETCH_CARDS, data: data.cards });
            dispatch({ type: actionTypes.FETCH_MESSAGES, data: data.messages, page: 1 });
            dispatch({ type: actionTypes.FETCH_PROFILE, data: data.user });

            dispatch(initialDataStatus(true));
         })
         .catch(error => dispatch(initialDataStatus(false)));
   };
}

export function initialDataStatus(status) {
   return {
      type: actionTypes.FETCH_INITIAL_DATA_STATUS,
      status
   };
}
