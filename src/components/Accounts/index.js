import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAccounts } from 'actions/accounts';
import AsyncLoader from 'components/AsyncLoader';

import AccountsList from './List';
import SingleAccount from './Single';

class Accounts extends Component {
   componentWillMount() {
      if (!this.props.fetchAccountsStatus) {
         this.props.fetchAccounts();
      }
   }

   render() {
      if (!this.props.fetchAccountsStatus) {
         return <AsyncLoader loaded={this.props.fetchAccountsStatus} />;

      } else {
         return (
            <div className="row panel-content">
               <div className="col-xs-12">
                  <Route exact path={this.props.match.url} component={AccountsList} />
                  <Route path={`${this.props.match.url}/:accId`} component={SingleAccount} />
               </div>
            </div>
         );
      }
   }
}

const mapStateToProps = (state) => {
   return {
      fetchAccountsStatus: state.accounts.status
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchAccounts: () => dispatch(fetchAccounts())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Accounts);