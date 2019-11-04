import { getMyCards, changePin, changeLimits } from 'api/cards';
import * as actionTypes from './actionTypes';

// Get all user's cards
export const fetchCards = () => async dispatch => {
   try {
      const cards = await getMyCards();

      if (!cards) {
         dispatch(fetchCardsStatus(false));
      }

      dispatch({ type: actionTypes.FETCH_CARDS, data: cards });

      // let cardsData = cards.docs.map(doc => ({
      //    ...doc.data(),
      //    id: doc.id
      // }));
   } catch (err) {
      throw new Error('Accounts fetch failed');
   }
};

export const fetchCardsStatus = status => ({
   type: actionTypes.FETCH_CARDS_STATUS,
   status
});

// Change card's PIN
export const changeCardPin = (id, newPin) => async dispatch => {
   // new Promise((resolve, reject) => {
   //    db.collection('cards')
   //       .doc(id)
   //       .update({ pin: newPin })
   //       .then(() => {
   //          dispatch({ type: actionTypes.CARD_CHANGE_PIN, id, newPin });
   //          resolve();
   //       })
   //       .catch(err => reject(err));
   // });

   try {
      const card = await changePin(id, newPin);

      if (!card) {
         dispatch(fetchCardsStatus(false));
      }

      dispatch({ type: actionTypes.CARD_CHANGE_PIN, id, newPin });
   } catch (err) {
      throw new Error("Card's pin change failed");
   }
};

// Change card's limits
// TODO
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

            // db.collection('cards')
            //    .doc(id)
            //    .update(limits)
            //    .then(() => {
            //       dispatch({
            //          type: actionTypes.CARD_CHANGE_LIMITS,
            //          id,
            //          newWithdrawalLimit,
            //          newOnlineLimit
            //       });
            //       resolve();
            //    })
            //    .catch(err => reject(err));
         }
      });
}
