import React from 'react';
import './style.scss';

const NewsletterBox = ({ clicked }) => (
   <button className="newsletter-box" onClick={clicked}>
      <span className="icon ion-email" />
   </button>
);

export default NewsletterBox;
