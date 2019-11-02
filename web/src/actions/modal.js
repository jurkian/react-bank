import * as actionTypes from './actionTypes';

export function showModal(modalType) {
   return {
      type: actionTypes.SHOW_MODAL,
      modalType
   };
}

export function closeModal() {
   return {
      type: actionTypes.CLOSE_MODAL
   };
}
