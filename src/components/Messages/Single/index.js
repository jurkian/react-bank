import React from 'react';
import { connect } from 'react-redux';
import format from 'date-fns/format';

const SingleMessage = ({ singleMessage: { id, title, date, content } }) => {
   date = format(date, 'DD/MM/YYYY HH:mm');

   return (
      <section className="single-message module">
         <h1>{title}</h1>
         <p>Date: {date}</p>

         <hr />

         <article dangerouslySetInnerHTML={{ __html: content }} />
      </section>
   );
};

const mapStateToProps = (state, ownProps) => {
   const messageId = ownProps.match.params.messageId;
   let tempFoundMessage;
   let foundMessage;

   // Find the message
   state.messages.data.forEach(pageMessages => {
      tempFoundMessage = Object.values(pageMessages).find(message => message.id === messageId);

      if (tempFoundMessage) {
         foundMessage = tempFoundMessage;
         return;
      }
   });

   return {
      singleMessage: foundMessage
   };
};

export default connect(mapStateToProps)(SingleMessage);
