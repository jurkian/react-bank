import React from 'react';
import { Route } from 'react-router-dom';

import MessagesList from './List/index';
import SingleMessage from './Single/index';

const Messages = (props) => {
   return (
      <div className="col-xs-12">
         <Route exact path={props.match.url} component={MessagesList} />
         <Route path={`${props.match.url}/:messageId`} component={SingleMessage} />
      </div>
   );
}

export default Messages;