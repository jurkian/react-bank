import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from 'tools';

const SingleMessage = ({ singleMessage: { title, sentDate, content } }) => {
   sentDate = formatDate(sentDate, 'dd/MM/yyyy HH:mm');

   return (
      <section className="module single-message">
         <h1>{title}</h1>
         <p>Date: {sentDate}</p>

         <hr />

         <article dangerouslySetInnerHTML={{ __html: content }} />
      </section>
   );
};

const mapStateToProps = (state, ownProps) => {
   const messageId = ownProps.match.params.messageId;

   return {
      singleMessage: state.messages.data.find(el => el._id === messageId)
   };
};

export default connect(mapStateToProps)(SingleMessage);
