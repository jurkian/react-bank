import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AccountsList from 'components/Accounts/List';
import SingleAccount from 'components/Accounts/Single';

const Accounts = ({ match }) => (
   <div className="row panel-content">
      <div className="col">
         <Switch>
            <Route exact path={match.url} component={AccountsList} />
            <Route path={`${match.url}/:accId`} component={SingleAccount} />
         </Switch>
      </div>
   </div>
);

export default Accounts;
