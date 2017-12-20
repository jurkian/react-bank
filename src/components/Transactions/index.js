import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TransactionsList from './List/index';
import SingleTransaction from './Single/index';

const Transactions = (props) => {
   return (
      <div className="row">
         <div className="col-xs-12">
            <Switch>
               <Route exact path="/panel/transactions" component={TransactionsList} />
               <Route path="/panel/transactions/:transId" component={SingleTransaction} />
            </Switch>
         </div>
      </div>
   );
}

export default Transactions;