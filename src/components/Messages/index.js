import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MessagesList from './List/index';
import SingleMessage from './Single/index';

class Messages extends Component {
   render() {
      return (
         <div className="col-xs-12">
            <Route exact path={this.props.match.url} component={MessagesList} />
            <Route path={`${this.props.match.url}/:messageId`} component={SingleMessage} />
         </div>
      );
   }
}

export default Messages;