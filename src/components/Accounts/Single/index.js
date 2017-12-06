import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from 'actions/accounts';
import AsyncLoader from 'components/AsyncLoader';

class SingleAccount extends Component {

   componentWillMount() {
      this.props.fetchAccounts();
   }
   
   render() {
      if (!this.props.fetchAccountsStatus) {
         return <AsyncLoader loaded={this.props.fetchAccountsStatus} />;

      } else {
         return <div className="well">
            <h1>{this.props.singleAcc.type}</h1>
            <ul>
               <li>Sortcode: {this.props.singleAcc.sortcode}</li>
               <li>Number: {this.props.singleAcc.number}</li>
               <li>Currency: {this.props.singleAcc.currency}</li>
               <li>Balance: {this.props.singleAcc.balance} {this.props.singleAcc.currency}</li>
            </ul>
         </div>
      }
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      singleAcc: state.accounts.data[ownProps.match.params.accId - 1],
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
)(SingleAccount);