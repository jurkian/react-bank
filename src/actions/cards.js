import * as actionTypes from './actionTypes';
import firebase from 'tools/firebase';

const db = firebase.firestore();

export function fetchCards() {
   return dispatch => {
      db
         .collection('cards')
         .get()
         .then(cards => {
            // Get cards
            let cardsData = cards.docs.map(doc => ({
               ...doc.data(),
               id: doc.id
            }));

            dispatch({ type: actionTypes.FETCH_CARDS, data: cardsData });
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
         db
            .collection('cards')
            .doc(id)
            .update({ pin: newPin })
            .then(() => {
               dispatch({ type: actionTypes.CARD_CHANGE_PIN, id, newPin });
               resolve();
            })
            .catch(err => reject(err));
      });
}

export function changeCardLimits(id, newOnlineLimit, newWithdrawalLimit) {
   return dispatch =>
      new Promise((resolve, reject) => {
         if (newOnlineLimit || newWithdrawalLimit) {
            const limits = {};

            if (newOnlineLimit) {
               limits.daily_online_limit = parseFloat(newOnlineLimit).toFixed(2);
            }

            if (newWithdrawalLimit) {
               limits.daily_withdrawal_limit = parseFloat(newWithdrawalLimit).toFixed(2);
            }

            db
               .collection('cards')
               .doc(id)
               .update(limits)
               .then(() => {
                  dispatch({
                     type: actionTypes.CARD_CHANGE_LIMITS,
                     id,
                     newWithdrawalLimit,
                     newOnlineLimit
                  });
                  resolve();
               })
               .catch(err => reject(err));
         }
      });
}
