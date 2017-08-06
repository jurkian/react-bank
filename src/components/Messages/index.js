import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MessagesList from './List/index';
import SingleMessage from './Single/index';

class Messages extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="container">
            <Route exact path={this.props.match.url} component={MessagesList} />
            <Route path={`${this.props.match.url}/:messageId`} component={SingleMessage} />
         </div>
      );
   }
}

export default Messages;