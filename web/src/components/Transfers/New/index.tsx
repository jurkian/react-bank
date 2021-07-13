import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Form from './Form';

class NewTransfer extends Component {
   render() {
      const accounts = this.props.accounts;
      const firstAccId = accounts[0]._id;
      const userAccountsList = accounts.map(acc => (
         <option key={acc._id} value={acc._id}>
            {`${acc.type}, ${acc.sortcode}, ${acc.balance} ${acc.currency}`}
         </option>
      ));

      return (
         <div className="row">
            <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
               <section className="module new-transfer">
                  <h1>New transfer</h1>

                  <Form
                     userId={this.props.userId}
                     userAccountsList={userAccountsList}
                     firstAccId={firstAccId}
                     addTransfer={this.props.addTransfer}
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
      userId: state.profile.data._id
   };
};

const mapDispatchToProps = dispatch => {
   return {
      addTransfer: data => dispatch(actions.addTransfer(data))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTransfer);
