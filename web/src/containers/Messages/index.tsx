import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MessagesList from 'components/Messages/List';
import SingleMessage from 'components/Messages/Single';

import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

const Messages: React.FC<Props> = (props) => {
   const { match } = props;

   return (
      <div className="row panel-content">
         <div className="col">
            <Switch>
               <Route exact path={match.url} component={MessagesList} />
               <Route path={`${match.url}/:messageId`} component={SingleMessage} />
            </Switch>
         </div>
      </div>
   );
};

export default Messages;
