import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from 'actions/transactions';
import AsyncLoader from 'components/AsyncLoader';

class SingleTransaction extends Component {

   componentWillMount() {
      this.props.fetchTransactions();
   }

   render() {
      if (!this.props.fetchTransactionStatus) {
         return <AsyncLoader loaded={this.props.fetchTransactionStatus} />;

      } else {
         return <section className="single-transfer module">
            <h1>{this.props.singleTrans.id}. {this.props.singleTrans.type}</h1>
            <ul>
               <li>Date: {this.props.singleTrans.date}</li>
               <li>Payee: {this.props.singleTrans.payeeName}</li>
               <li>Amount: {this.props.singleTrans.amount}</li>
               <li>Type: {this.props.singleTrans.type}</li>
               <li>Status: {this.props.singleTrans.status}</li>
            </ul>
         </section>
      }
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      singleTrans: state.transactions.data[ownProps.match.params.transId - 1],
      fetchTransactionStatus: state.transactions.status
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
)(SingleTransaction);