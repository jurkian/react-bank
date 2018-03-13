import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from 'actions/accounts';
import AsyncLoader from 'components/AsyncLoader';
import Form from './Form';

class NewTransaction extends Component {
   componentWillMount() {
      this.props.fetchAccounts();
   }

   render() {
      if (!this.props.fetchAccountsStatus) {
         return <AsyncLoader loaded={this.props.fetchAccountsStatus} />;

      } else {

         const accounts = this.props.accounts.data;
         const userAccountsList = accounts.map((acc, index) => (
            <option key={index} value={index}>
               {`${acc.type}, ${acc.sortcode}, ${acc.balance} ${acc.currency}`}
            </option>
         ));

         return (
            <div className="row">
               <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <section className="new-transfer module">
                     <h1>New transfer</h1>

                     <Form userAccountsList={userAccountsList} />
                  </section>
               </div>
            </div>
         );
      }
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      accounts: state.accounts,
      fetchAccountsStatus: state.accounts.status,
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
)(NewTransaction);