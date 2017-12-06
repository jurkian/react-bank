import axios from 'axios';

export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARDS_STATUS = 'FETCH_CARDS_STATUS';
export const CARD_CHANGE_PIN = 'CARD_CHANGE_PIN';
export const CARD_CHANGE_LIMITS = 'CARD_CHANGE_LIMITS';

export function fetchCards() {
   return function (dispatch) {
      axios.get('http://localhost:3001/cards')
      .then(res => res.data)
      .then(data => {
         dispatch({ type: FETCH_CARDS, data });
         dispatch(fetchCardsStatus(true));
      })
      .catch(error => {
         dispatch(fetchCardsStatus(0));
      });
   }
}

export function fetchCardsStatus(status) {
   return {
      type: FETCH_CARDS_STATUS,
      status
   }
}

export function cardChangePin (id, newPin) {
   return {
      type: CARD_CHANGE_PIN,
      id,
      newPin
   }
}

export function cardChangeLimits (id, newWithdrawalLimit, newOnlineLimit) {
   return {
      type: CARD_CHANGE_LIMITS,
      id,
      newWithdrawalLimit,
      newOnlineLimit
   }
}