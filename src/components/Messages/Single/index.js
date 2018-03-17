import React from 'react';
import { connect } from 'react-redux';

const SingleMessage = ({ singleMessage }) => {
   return (
      <section className="single-message module">
         <h1>{singleMessage.id}. {singleMessage.title}</h1>
         <p>Date: {singleMessage.date}</p>

         <hr />

         <article dangerouslySetInnerHTML={{ __html: singleMessage.content }} />
      </section>
   );
};

const mapStateToProps = (state, ownProps) => {
   const messageId = parseInt(ownProps.match.params.messageId, 10);
   let tempFoundMessage;
   let foundMessage;

   // Find the message
   state.messages.data.forEach(pageMessages => {
      tempFoundMessage = pageMessages.find(message => message.id === messageId);

      if (tempFoundMessage) {
         foundMessage = tempFoundMessage;
         return;
      }
   })

   return {
      singleMessage: foundMessage
   }
};

export default connect(mapStateToProps)(SingleMessage);