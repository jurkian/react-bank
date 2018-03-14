import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTransactions } from 'actions/transactions';
import AsyncLoader from 'components/AsyncLoader';
import TransactionsListEl from '../ListElement';

class TransactionsList extends Component {
   constructor() {
      super();

      this.state = { search: '' };
   }

   componentWillMount() {
      this.props.fetchTransactions();
   }

   render() {

      // Allow filtering by payee's name
      const transactions = this.props.transactions
         .filter(trans => trans.payeeName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
         .map(trans => <TransactionsListEl key={trans.id} {...trans} matchUrl={this.props.match.url} />);

      if (!this.props.fetchTransactionsStatus) {
         return <AsyncLoader loaded={this.props.fetchTransactionsStatus} />;

      } else {
         return (
            <div>
               <h1>Transactions</h1>

               <p>There are {this.props.transactions.length} finished transactions right now!</p>

               <p><Link to={`${this.props.match.url}/new`} className="btn btn-primary">New transfer</Link></p>

               <div className="form-group">
                  <input
                     className="form-control"
                     placeholder="Search for..."
                     onChange={this.findTransaction.bind(this)}
                     ref="search" />
               </div>
   
               <div className="list-group">
                  {transactions}
               </div>
            </div>
         );
      }
   }

   findTransaction() {
      this.setState({ search: this.refs.search.value });
   }
}

const mapStateToProps = (state) => {
   return {
      transactions: state.transactions.data,
      fetchTransactionsStatus: state.transactions.status
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
)(TransactionsList);