import React from 'react';
import { Route } from 'react-router-dom';

import TransactionsList from './List/index';
import SingleTransaction from './Single/index';

const Transactions = (props) => {
   return (
      <div className="row">
         <div className="col-xs-12">
            <Route exact path={props.match.url} component={TransactionsList} />
            <Route path={`${props.match.url}/:transId`} component={SingleTransaction} />
         </div>
      </div>
   );
}

export default Transactions;