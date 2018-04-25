import axios from 'axios';
import * as actionTypes from './actionTypes';

export function fetchCards() {
   return dispatch => {
      axios
         .get('/cards')
         .then(res => res.data)
         .then(data => {
            dispatch({ type: actionTypes.FETCH_CARDS, data });
            dispatch(fetchCardsStatus(true));
         })
         .catch(error => dispatch(fetchCardsStatus(false)));
   };
}

export function fetchCardsStatus(status) {
   return {
      type: actionTypes.FETCH_CARDS_STATUS,
      status
   };
}

export function changeCardPin(id, newPin) {
   return dispatch =>
      new Promise((resolve, reject) => {
         axios(`/cards/${id}`, {
            method: 'patch',
            headers: { 'Content-Type': 'application/json' },
            data: { pin: newPin }
         })
            .then(res => res.data)
            .then(data => {
               dispatch({ type: actionTypes.CARD_CHANGE_PIN, id, newPin });
               resolve(data);
            })
            .catch(err => reject(err));
      });
}

export function changeCardLimits(id, newWithdrawalLimit = '', newOnlineLimit = '') {
   return dispatch =>
      new Promise((resolve, reject) => {
         axios(`/cards/${id}`, {
            method: 'patch',
            headers: { 'Content-Type': 'application/json' },
            data: {
               daily_withdrawal_limit: newWithdrawalLimit,
               daily_online_limit: newOnlineLimit
            }
         })
            .then(res => res.data)
            .then(data => {
               dispatch({
                  type: actionTypes.CARD_CHANGE_LIMITS,
                  id,
                  newWithdrawalLimit,
                  newOnlineLimit
               });

               resolve(data);
            })
            .catch(err => reject(err));
      });
}
