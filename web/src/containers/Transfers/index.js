import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TransfersList from 'components/Transfers/List';
import SingleTransaction from 'components/Transfers/Single';
import NewTransaction from 'components/Transfers/New';

const Transfers = props => (
   <div className="row panel-content">
      <div className="col-xs-12">
         <Switch>
            <Route exact path="/panel/transfers" component={TransfersList} />
            <Route path="/panel/transfers/new" component={NewTransaction} />
            <Route path="/panel/transfers/:transId" component={SingleTransaction} />
         </Switch>
      </div>
   </div>
);

export default Transfers;
