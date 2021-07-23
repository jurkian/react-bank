import { AnyAction } from 'redux';
import * as actionTypes from 'actions/actionTypes';

interface State {
   data: {
      _id: string;
      pin: number;
      dailyOnlineLimit: string;
      dailyWithdrawalLimit: string;
   }[];
   status: boolean;
}

const initialState: State = {
   data: [],
   status: true,
};

const cards = (state = initialState, action: AnyAction) => {
   if (action.type === actionTypes.FETCH_CARDS) {
      return {
         ...state,
         data: [...action.data],
         status: true,
      };
   }

   if (action.type === actionTypes.FETCH_CARDS_STATUS) {
      return {
         ...state,
         status: action.status,
      };
   }

   if (action.type === actionTypes.CARD_CHANGE_PIN) {
      const data = state.data;
      const foundCard = data.find((card) => card._id === action.id);

      if (!foundCard) return state;

      foundCard.pin = action.newPin;

      return {
         ...state,
         data: [...data],
      };
   }

   if (action.type === actionTypes.CARD_CHANGE_LIMITS) {
      const data = state.data;
      const foundCard = data.find((card) => card._id === action.id);

      if (!foundCard) return state;

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
         data: [...data],
      };
   }

   return state;
};

export default cards;
