import {
   FETCH_CARDS,
   FETCH_CARDS_STATUS,
   CARD_CHANGE_PIN,
   CARD_CHANGE_PIN_STATUS,
   CARD_CHANGE_LIMITS,
   CARD_CHANGE_LIMITS_STATUS
} from 'actions/cards';

const initialState = {
   data: [],
   status: false,
   validations: []
};

const cards = (state = initialState, action) => {
   let currentCard;

   switch (action.type) {

      case FETCH_CARDS:
         return {
            ...state,
            data: [...action.data]
         }

      case FETCH_CARDS_STATUS:
         return {
            ...state,
            status: action.status
         }

      case CARD_CHANGE_PIN:
         currentCard = state.data.find(el => el.id === action.id);
         currentCard.pin = action.newPin;

         return {
            ...state
         }

      case CARD_CHANGE_PIN_STATUS:
         return {
            ...state,
            validations: {
               ...state.validations,
               changePin: action.status
            }
         };

      case CARD_CHANGE_LIMITS:
         currentCard = state.data.find(el => el.id === action.id);
         currentCard.daily_withdrawal_limit = action.newWithdrawalLimit;
         currentCard.daily_online_limit = action.newOnlineLimit;

         return {
            ...state
         }

      case CARD_CHANGE_LIMITS_STATUS:
         return {
            ...state,
            validations: {
               ...state.validations,
               changeLimits: action.status
            }
         };

      default: 
         return state;
   }
};

export default cards;