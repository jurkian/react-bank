import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAccounts } from 'actions/accounts';
import Loader from 'components/UI/Loader';

import AccountsList from 'components/Accounts/List';
import SingleAccount from 'components/Accounts/Single';

class Accounts extends Component {
   componentWillMount() {
      if (!this.props.fetchAccountsStatus) {
         this.props.fetchAccounts();
      }
   }

   render() {
      if (!this.props.fetchAccountsStatus) {
         return <Loader />;

      } else {
         return (
            <div className="row panel-content">
               <div className="col-xs-12">
                  <Switch>
                     <Route exact path={this.props.match.url} component={AccountsList} />
                     <Route path={`${this.props.match.url}/:accId`} component={SingleAccount} />
                  </Switch>
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