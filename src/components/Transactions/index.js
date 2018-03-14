import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTransactions } from 'actions/transactions';
import AsyncLoader from 'components/AsyncLoader';

import TransactionsList from './List';
import SingleTransaction from './Single';
import NewTransaction from './New';

class Transactions extends Component {
   componentWillMount() {
      if (!this.props.fetchTransactionsStatus) {
         this.props.fetchTransactions();
      }
   }

   render() {
      if (!this.props.fetchTransactionsStatus) {
         return <AsyncLoader loaded={this.props.fetchTransactionsStatus} />;

      } else {
         return (
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
      }
   }
}

const mapStateToProps = (state) => {
   return {
      fetchTransactionsStatus: state.transactions.status
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchTransactions: () => dispatch(fetchTransactions())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Transactions);