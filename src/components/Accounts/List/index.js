import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from 'actions/accounts';
import AccountsListElement from '../ListElement';
import AsyncLoader from 'components/AsyncLoader';

class AccountsList extends Component {

   componentWillMount() {
      this.props.fetchAccounts();
   }

   render() {

      // Prepare accounts list
      const accounts = this.props.accounts.map((acc, index) =>
         <AccountsListElement key={index} {...acc} matchUrl={this.props.match.url} />);

      if (!this.props.fetchAccountsStatus) {
         return <AsyncLoader loaded={this.props.fetchAccountsStatus} />;

      } else {
         return (
            <div>
               <h1>Accounts</h1>
               <p>You have {this.props.accounts.length} accounts</p>
   
               <div className="list-group">
                  {accounts}
               </div>
            </div>
         );
      }
   }
}

const mapStateToProps = (state) => {
   return {
      accounts: state.accounts.data,
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
)(AccountsList);