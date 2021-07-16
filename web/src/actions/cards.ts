import _ from 'lodash';
import { getMyCards, changePin, changeLimits } from 'api/cards';
import * as actionTypes from './actionTypes';

import { AppDispatch } from 'store';

// Get all user's cards
export const fetchCards = () => async (dispatch: AppDispatch) => {
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

export const fetchCardsStatus = (status: boolean) => ({
   type: actionTypes.FETCH_CARDS_STATUS,
   status,
});

// Change card's PIN
export const changeCardPin = (id: string, newPin: number) => async (dispatch: AppDispatch) => {
   try {
      const card = await changePin(id, newPin);

      if (!card) {
         return;
      }

      dispatch({ type: actionTypes.CARD_CHANGE_PIN, id, newPin });
   } catch (err) {}
};

type LimitsType = {
   dailyOnlineLimit?: string;
   dailyWithdrawalLimit?: string;
};

// Change card's limits
export const changeCardLimits =
   (id: string, newOnlineLimit: string, newWithdrawalLimit: string) =>
   async (dispatch: AppDispatch) => {
      try {
         const limits: LimitsType = {};

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
               ...limits,
            });
         }
      } catch (err) {}
   };
