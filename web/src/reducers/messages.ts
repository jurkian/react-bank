import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: true
};

const messages = (state = initialState, action) => {
   let data;

   switch (action.type) {
      case actionTypes.FETCH_MESSAGES:
         return {
            ...state,
            data: [...action.data],
            status: true
         };

      case actionTypes.FETCH_MESSAGES_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.MESSAGE_TOGGLE:
         data = state.data;
         const foundMsg = data.find(msg => msg._id === action.id);

         foundMsg.isRead = !foundMsg.isRead;

         return {
            ...state,
            data: [...data]
         };

      case actionTypes.MESSAGE_REMOVE:
         data = state.data.filter(msg => msg._id !== action.id);

         return {
            ...state,
            data: [...data]
         };

      default:
         return state;
   }
};

export default messages;
