import React, { Component } from 'react';

class SingleMessage extends Component {
   constructor(props) {
      super(props);

      this.state = { singleMessage: [] };
   }

   render() {
      return (
         <div>
            <h1>{this.state.singleMessage.id}. {this.state.singleMessage.title}</h1>
            <ul>
               <li>Date: {this.state.singleMessage.date}</li>
               <li>{this.state.singleMessage.content}</li>
            </ul>
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