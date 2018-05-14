import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: true
};

const cards = (state = initialState, action) => {
   let modifiedCard;

   switch (action.type) {
      case actionTypes.FETCH_CARDS:
         return {
            ...state,
            data: [...action.data],
            status: true
         };

      case actionTypes.FETCH_CARDS_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.CARD_CHANGE_PIN:
         modifiedCard = [...state.data].find(el => el.id === action.id);
         modifiedCard.pin = action.newPin;

         return {
            ...state,
            data: [...state.data, modifiedCard]
         };

      case actionTypes.CARD_CHANGE_LIMITS:
         modifiedCard = [...state.data].find(el => el.id === action.id);

         modifiedCard.daily_withdrawal_limit = action.newWithdrawalLimit;
         modifiedCard.daily_online_limit = action.newOnlineLimit;

         return {
            ...state,
            data: [...state.data, modifiedCard]
         };

      default:
         return state;
   }
};

export default cards;
