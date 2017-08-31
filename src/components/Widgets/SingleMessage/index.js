import React from 'react';
import { Link } from 'react-router-dom';

import MultiModuleButtons from '../../Buttons/MultiModuleButtons/index';
import SingleMultiButton from '../../Buttons/SingleMultiButton/index';

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

         <MultiModuleButtons>
            <SingleMultiButton text="Cancel" href="#" />
            <SingleMultiButton text="Reply" />
         </MultiModuleButtons>
      </section>
   );
};

export default SingleMessage;