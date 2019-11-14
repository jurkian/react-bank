import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: true
};

const cards = (state = initialState, action) => {
   let data;
   let foundCard;

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
         data = state.data;
         foundCard = data.find(card => card._id === action.id);

         foundCard.pin = action.newPin;

         return {
            ...state,
            data: [...data]
         };

      case actionTypes.CARD_CHANGE_LIMITS:
         data = state.data;
         foundCard = data.find(card => card._id === action.id);

         const newOnlineLimit = action.dailyOnlineLimit;
         const newWithdrawalLimit = action.dailyWithdrawalLimit;

         if (newOnlineLimit) {
            foundCard.dailyOnlineLimit = parseFloat(newOnlineLimit).toFixed(2);
         }

         if (newWithdrawalLimit) {
            foundCard.dailyWithdrawalLimit = parseFloat(newWithdrawalLimit).toFixed(2);
         }

         return {
            ...state,
            data: [...data]
         };

      default:
         return state;
   }
};

export default cards;
