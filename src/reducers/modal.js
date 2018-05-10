import * as actionTypes from 'actions/actionTypes';

const initialState = {
   isVisible: false,
   type: ''
};

const modal = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.SHOW_MODAL:
         return {
            ...state,
            isVisible: true,
            type: action.modalType
         };

      case actionTypes.CLOSE_MODAL:
         return {
            ...state,
            isVisible: false,
            type: ''
         };

      default:
         return state;
   }
};

export default modal;
