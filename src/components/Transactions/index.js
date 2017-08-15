import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TransactionsList from './List/index';
import SingleTransaction from './Single/index';

class Transactions extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="col-xs-12">
            <Route exact path={this.props.match.url} component={TransactionsList} />
            <Route path={`${this.props.match.url}/:transId`} component={SingleTransaction} />
         </div>
      );
   }
}

export default Transactions;