import * as actionTypes from './actionTypes';

export const showModal = modalType => ({
   type: actionTypes.SHOW_MODAL,
   modalType
});

export const closeModal = () => ({
   type: actionTypes.CLOSE_MODAL
});
