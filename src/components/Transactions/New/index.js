import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from 'actions/accounts';
import { addTransaction } from 'actions/transactions';
import Loader from 'components/UI/Loader';
import Form from './Form';

class NewTransaction extends Component {
   componentWillMount() {
      if (!this.props.fetchAccountsStatus) {
         this.props.fetchAccounts();
      }
   }

   render() {
      if (!this.props.fetchAccountsStatus) {
         return <Loader />;
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

                     <Form
                        userAccountsList={userAccountsList}
                        addTransaction={this.props.addTransaction}
                     />
                  </section>
               </div>
            </div>
         );
      }
   }
}

const mapStateToProps = state => {
   return {
      accounts: state.accounts,
      fetchAccountsStatus: state.accounts.status
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchAccounts: () => dispatch(fetchAccounts()),
      addTransaction: data => dispatch(addTransaction(data))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
