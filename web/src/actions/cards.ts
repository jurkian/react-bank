import _ from 'lodash';
import { getMyCards, changePin, changeLimits } from 'api/cards';
import * as actionTypes from './actionTypes';

// Get all user's cards
export const fetchCards = () => async dispatch => {
   try {
      const data = await getMyCards();

      if (!data) {
         dispatch(fetchCardsStatus(false));
         return;
      }

      dispatch({ type: actionTypes.FETCH_CARDS, data });
   } catch (err) {
      dispatch(fetchCardsStatus(false));
   }
};

export const fetchCardsStatus = status => ({
   type: actionTypes.FETCH_CARDS_STATUS,
   status
});

// Change card's PIN
export const changeCardPin = (id, newPin) => async dispatch => {
   try {
      const card = await changePin(id, newPin);

      if (!card) {
         return;
      }

      dispatch({ type: actionTypes.CARD_CHANGE_PIN, id, newPin });
   } catch (err) {}
};

// Change card's limits
export const changeCardLimits = (id, newOnlineLimit, newWithdrawalLimit) => async dispatch => {
   try {
      const limits = {};

      if (newOnlineLimit) {
         limits.dailyOnlineLimit = parseFloat(newOnlineLimit).toFixed(2);
      }

      if (newWithdrawalLimit) {
         limits.dailyWithdrawalLimit = parseFloat(newWithdrawalLimit).toFixed(2);
      }

      if (!_.isEmpty(limits)) {
         const card = await changeLimits(id, { ...limits });

         if (!card) {
            return;
         }

         dispatch({
            type: actionTypes.CARD_CHANGE_LIMITS,
            id,
            ...limits
         });
      }
   } catch (err) {}
};
