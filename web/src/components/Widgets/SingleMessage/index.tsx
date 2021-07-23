import React from 'react';

import MultiModuleButtons from 'components/UI/Buttons/MultiModuleButtons';
import SingleMultiButton from 'components/UI/Buttons/SingleMultiButton';

import './style.scss';

type Props = {
   title: string;
   sender: string;
   recipient: string;
   content: string;
};

const SingleMessage = (props: Props) => {
   return (
      <section className="module message">
         <header className="message-header">
            <h3>{props.title}</h3>

            <div className="message-sender-info">
               <img src="https://placehold.it/82x82" alt="Sender profile" />
               <div>
                  <span>{props.sender}</span>
                  <strong>to {props.recipient}</strong>
               </div>
            </div>
         </header>

         <article dangerouslySetInnerHTML={{ __html: props.content }} />

         <MultiModuleButtons>
            <SingleMultiButton text="Cancel" href="#" />
            <SingleMultiButton text="Reply" />
         </MultiModuleButtons>
      </section>
   );
};

export default SingleMessage;
