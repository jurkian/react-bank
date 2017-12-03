import React, { Component } from 'react';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';

class SingleMessage extends Component {
   constructor() {
      super();

      this.state = { singleMessage: [], loaded: false };
   }

   render() {
      return (
         <div className="well">
            <AsyncLoader loaded={this.state.loaded}>
               <h1>{this.state.singleMessage.id}. {this.state.singleMessage.title}</h1>
               <p>Date: {this.state.singleMessage.date}</p>

               <hr />

               <article dangerouslySetInnerHTML={{__html: this.state.singleMessage.content}} />
            </AsyncLoader>
         </div>
      );
   }

   componentDidMount() {
      axios.get(`http://localhost:3001/messages/${this.props.match.params.messageId}`)
      .then(res => res.data)
      .then(singleMessage => this.setState({ singleMessage, loaded: true }))
      .catch(() => this.setState({ loaded: 0 }));
   }
}

export default SingleMessage;