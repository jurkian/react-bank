import React, { Component } from 'react';

class SingleMessage extends Component {
   constructor() {
      super();

      this.state = { singleMessage: [] };
   }

   render() {
      return (
         <div className="well">
            <h1>{this.state.singleMessage.id}. {this.state.singleMessage.title}</h1>
            <p>Date: {this.state.singleMessage.date}</p>

            <hr />

            <article dangerouslySetInnerHTML={{__html: this.state.singleMessage.content}} />
         </div>
      );
   }

   componentDidMount() {
      fetch(`http://localhost:3001/messages/${this.props.match.params.messageId}`)
      .then(res => res.json())
      .then(singleMessage => {
         this.setState({ singleMessage });
      });
   }
}

export default SingleMessage;