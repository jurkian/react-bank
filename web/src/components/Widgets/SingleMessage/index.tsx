import React from 'react';
import PropTypes from 'prop-types';

import MultiModuleButtons from 'components/UI/Buttons/MultiModuleButtons';
import SingleMultiButton from 'components/UI/Buttons/SingleMultiButton';

import './style.scss';

const SingleMessage = props => {
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

SingleMessage.propTypes = {
   title: PropTypes.string,
   sender: PropTypes.string,
   recipient: PropTypes.string,
   content: PropTypes.string
};

export default SingleMessage;
