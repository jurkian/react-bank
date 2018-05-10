import React from 'react';
import './style.scss';

const NewsletterModal = () => (
   <div className="modal" onClick={e => e.stopPropagation()}>
      <div className="modal-header">
         <h3>Subscribe to our newsletter</h3>
      </div>
      <div className="modal-content">Email, Password, Subscribe</div>
   </div>
);

export default NewsletterModal;
