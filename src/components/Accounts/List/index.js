import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from 'actions/accounts';
import AccountsListElement from '../ListElement';
import AsyncLoader from 'components/AsyncLoader';

class AccountsList extends Component {

   // Load accounts when component is ready to mount
   componentWillMount() {
      this.props.fetchAccounts();
   }

   render() {

      // Prepare accounts list
      const accounts = this.props.accounts.map((acc, index) =>
         <AccountsListElement key={index} {...acc} matchUrl={this.props.match.url} />);

      return (
         <div>
            <h1>Accounts</h1>

            <AsyncLoader loaded={this.props.fetchAccountsStatus}>
               <p>You have {this.props.accounts.length} accounts</p>

               <div className="list-group">
                  {accounts}
               </div>
            </AsyncLoader>
         </div>
      );
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