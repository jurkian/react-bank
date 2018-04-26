import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: false,
   paginationStatus: false,
   pageNumber: 1
};

const messages = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_MESSAGES:
         const messagesData = [...state.data];

         // -1, because pages start from 1
         messagesData[action.page - 1] = action.data;

         return {
            ...state,
            data: messagesData
         };

      case actionTypes.FETCH_MESSAGES_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.MESSAGE_TOGGLE:
         let foundMsgIndex;

         return Object.assign({}, state, {
            data: state.data.map(messages => {
               // Find a place where message should be toggled
               foundMsgIndex = messages.findIndex(msg => msg.id === action.id);

               // Change the toggle
               if (foundMsgIndex >= 0) {
                  messages[foundMsgIndex].isToggled = !messages[foundMsgIndex].isToggled;
               }

               return messages;
            })
         });

      case actionTypes.MESSAGE_REMOVE:
         return Object.assign({}, state, {
            data: state.data.map(messages => messages.filter(msg => msg.id !== action.id))
         });

      case actionTypes.FETCH_MESSAGES_PAGINATION_STATUS:
         return {
            ...state,
            paginationStatus: action.status
         };

      case actionTypes.SET_MESSAGES_PAGE:
         return {
            ...state,
            pageNumber: action.pageNumber
         };

      default:
         return state;
   }
};

export default messages;
