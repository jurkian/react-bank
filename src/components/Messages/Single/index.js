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
   return {
      singleMessage: state.messages.data[ownProps.match.params.messageId - 1]
   }
};

export default connect(mapStateToProps)(SingleMessage);