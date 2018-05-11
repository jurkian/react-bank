import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TransactionsList from 'components/Transactions/List';
import SingleTransaction from 'components/Transactions/Single';
import NewTransaction from 'components/Transactions/New';

const Transactions = props => (
   <div className="row panel-content">
      <div className="col-xs-12">
         <Switch>
            <Route exact path="/panel/transactions" component={TransactionsList} />
            <Route path="/panel/transactions/new" component={NewTransaction} />
            <Route path="/panel/transactions/:transId" component={SingleTransaction} />
         </Switch>
      </div>
   </div>
);

export default Transactions;
