import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const SingleMessage = (props) => {
   return (
      <section className="message module">
         <header className="message-header">
            <h3>{props.title}</h3>

            <div className="message-sender-info">
               <img src="https://placehold.it/82x82" alt="Sender profile photo" />
               <div>
                  <span>{props.sender}</span>
                  <strong>to {props.recipient}</strong>
               </div>
            </div>
         </header>

         <article dangerouslySetInnerHTML={{__html: props.content}} />

         <div className="module-double-btn">
            <Link to="#" className="btn btn-primary">Cancel</Link>
            <Link to="#" className="btn btn-primary">Reply</Link>
         </div>
      </section>
   );
};

export default SingleMessage;