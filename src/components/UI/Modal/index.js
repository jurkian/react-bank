import React, { Fragment } from 'react';
import Backdrop from 'components/UI/Backdrop';
import NewsletterModal from 'components/UI/Modal/Newsletter';
import './style.scss';

const Modal = ({ isVisible, type, close }) => {
   let ModalToShow;

   switch (type) {
      case 'newsletter':
         ModalToShow = NewsletterModal;
         break;

      default:
         return null;
   }

   return isVisible ? (
      <Fragment>
         <Backdrop />
         <div className="modal-container" onClick={close}>
            <ModalToShow />
         </div>
      </Fragment>
   ) : null;
};

export default Modal;
