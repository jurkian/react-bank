import React from 'react';
import { connect } from 'react-redux';
import { formatFirebaseDate } from 'tools';

const SingleMessage = ({ singleMessage: { id, title, date, content } }) => {
   date = formatFirebaseDate(date, 'DD/MM/YYYY HH:mm');

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

   // Find the message among the pages (remember about pagination!)
   for (const pageMessages of state.messages.data) {
      tempFoundMessage = pageMessages.find(message => message.id === messageId);

      if (tempFoundMessage) {
         foundMessage = tempFoundMessage;
         break;
      }
   }

   return {
      singleMessage: foundMessage
   };
};

export default connect(mapStateToProps)(SingleMessage);
