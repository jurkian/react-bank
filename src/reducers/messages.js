import * as actionTypes from 'actions/actionTypes';

const initialState = {
   data: [],
   status: true,
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
            data: messagesData,
            status: true
         };

      case actionTypes.FETCH_MESSAGES_STATUS:
         return {
            ...state,
            status: action.status
         };

      case actionTypes.MESSAGE_TOGGLE:
         return Object.assign({}, state, {
            data: state.data.map(messagesPage => {
               // Find a place where message should be toggled
               if (messagesPage[action.id]) {
                  messagesPage[action.id].isToggled = !messagesPage[action.id].isToggled;
               }

               return messagesPage;
            })
         });

      case actionTypes.MESSAGE_REMOVE:
         return Object.assign({}, state, {
            data: state.data.map(messagesPage => {
               if (messagesPage[action.id]) {
                  delete messagesPage[action.id];
               }

               return messagesPage;
            })
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
