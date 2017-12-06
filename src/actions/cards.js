import axios from 'axios';

export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARDS_STATUS = 'FETCH_CARDS_STATUS';
export const CARD_CHANGE_PIN = 'CARD_CHANGE_PIN';
export const CARD_CHANGE_PIN_STATUS = 'CARD_CHANGE_PIN_STATUS';
export const CARD_CHANGE_LIMITS = 'CARD_CHANGE_LIMITS';
export const CARD_CHANGE_LIMITS_STATUS = 'CARD_CHANGE_LIMITS_STATUS';

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

export function changeCardPin(id, newPin) {
   return function (dispatch) {
      dispatch(changeCardPinStatus('Loading...'));

      axios(`http://localhost:3001/cards/${id}`, {
         method: 'patch',
         headers: { 'Content-Type': 'application/json' },
         data: { pin: newPin }
      })
      .then(res => res.data)
      .then(data => {
         dispatch({ type: CARD_CHANGE_PIN, id, newPin });
         dispatch(changeCardPinStatus('PIN successfully changed'));
      })
      .catch(error => {
         dispatch(changeCardPinStatus('Problems... try again'));
      });
   }
}

export function changeCardPinStatus(status) {
   return {
      type: CARD_CHANGE_PIN_STATUS,
      status
   }
}

export function changeCardLimits(id, newWithdrawalLimit, newOnlineLimit) {
   newWithdrawalLimit = newWithdrawalLimit || 0;
   newOnlineLimit = newOnlineLimit || 0;

   return function (dispatch) {
      dispatch(changeCardLimitsStatus('Loading...'));

      axios(`http://localhost:3001/cards/${id}`, {
         method: 'patch',
         headers: { 'Content-Type': 'application/json' },
         data: {
            daily_withdrawal_limit: newWithdrawalLimit,
            daily_online_limit: newOnlineLimit
         }
      })
      .then(res => res.data)
      .then(data => {
         dispatch({ type: CARD_CHANGE_LIMITS, id, newWithdrawalLimit, newOnlineLimit });
         dispatch(changeCardLimitsStatus('Limits successfully changed'));
      })
      .catch(error => {
         dispatch(changeCardLimitsStatus('Problems... try again'));
      });
   }
}

export function changeCardLimitsStatus(status) {
   return {
      type: CARD_CHANGE_LIMITS_STATUS,
      status
   }
}