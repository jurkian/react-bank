import {
   FETCH_CARDS,
   FETCH_CARDS_STATUS,
   CARD_CHANGE_PIN,
   CARD_CHANGE_LIMITS
} from 'actions/cards';

const initialState = {
   data: [],
   status: false,
   validations: []
};

const cards = (state = initialState, action) => {
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
         return state;

      case CARD_CHANGE_LIMITS:
         return state;

      default: 
         return state;
   }
};

export default cards;