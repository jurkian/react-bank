import React from 'react';
import { connect } from 'react-redux';

const SingleMessage = (props) => {
   return (
      <section className="single-message module">
         <h1>{props.singleMessage.id}. {props.singleMessage.title}</h1>
         <p>Date: {props.singleMessage.date}</p>

         <hr />

         <article dangerouslySetInnerHTML={{ __html: props.singleMessage.content }} />
      </section>
   );
};

const mapStateToProps = (state, ownProps) => {
   const messageId = parseInt(ownProps.match.params.messageId, 10);

   return {
      singleMessage: state.messages.data.find(el => el.id === messageId)
   }
};

export default connect(mapStateToProps)(SingleMessage);