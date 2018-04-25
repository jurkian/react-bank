import * as actions from 'actions/cards';

const initialState = {
   data: [],
   status: false
};

const cards = (state = initialState, action) => {
   let modifiedCard;

   switch (action.type) {
      case actions.FETCH_CARDS:
         return {
            ...state,
            data: [...action.data]
         };

      case actions.FETCH_CARDS_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actions.CARD_CHANGE_PIN:
         modifiedCard = [...state.data].find(el => el.id === action.id);
         modifiedCard.pin = action.newPin;

         return {
            ...state,
            data: [...state.data, modifiedCard]
         };

      case actions.CARD_CHANGE_LIMITS:
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
