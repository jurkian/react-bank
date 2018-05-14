import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Form from './Form';

class NewTransaction extends Component {
   render() {
      const accounts = this.props.accounts;
      const userAccountsList = Object.entries(accounts).map(([key, acc]) => (
         <option key={key} value={key}>
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
                     firstAccId={this.props.firstAccId}
                     addTransaction={this.props.addTransaction}
                  />
               </section>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      accounts: state.accounts.data,
      firstAccId: Object.keys(state.accounts.data)[0]
   };
};

const mapDispatchToProps = dispatch => {
   return {
      addTransaction: data => dispatch(actions.addTransaction(data))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
