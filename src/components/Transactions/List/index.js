import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingAnimation from '../../LoadingAnimation/index';

class TransactionsList extends Component {
   constructor() {
      super();

      this.state = { transactions: [], search: '', isFetching: true };
   }

   render() {

      // Transactions
      // Allow search for payee's name
      const transactions = this.state.transactions
         .filter(trans => trans.payee.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
         .map(trans => <TransactionEl key={trans.id} {...trans} matchUrl={this.props.match.url} />);

      return (
         <div>
            <h1>Transactions</h1>

            {this.state.isFetching ? (
               <LoadingAnimation />
            ) : (
               <div>
                  <p>There are {this.state.transactions.length} finished transactions right now!</p>

                  <form onSubmit={this.handleFormSubmit.bind(this)}>
                     <div className="form-group">
                        <input className="form-control" placeholder="Search for..." onChange={this.findTransaction.bind(this)} ref="search" />
                     </div>
                  </form>
      
                  <div className="list-group">
                     {transactions}
                  </div>
               </div>
            )}
         </div>
      );
   }

   componentDidMount() {
      fetch('http://localhost:3001/transactions')
      .then(res => res.json())
      .then(transactions => {
         this.setState({ transactions, isFetching: false });
      });
   }

   findTransaction() {
      this.setState({ search: this.refs.search.value });
   }

   handleFormSubmit(e) {
      e.preventDefault();
   }
}

// Single transaction element
const TransactionEl = (props) => {
   return (
      <Link to={`${props.matchUrl}/${props.id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{props.id}. {props.type}</h4>
         <p className="list-group-item-text">
            Payee: {props.payee}, date: {props.date}, amount: {props.amount}, status: {props.status}
         </p>
      </Link>
   );
}

TransactionEl.propTypes = {
   matchUrl: PropTypes.string,
   id: PropTypes.number,
   type: PropTypes.string,
   payee: PropTypes.string,
   date: PropTypes.string,
   amount: PropTypes.number,
   status: PropTypes.string
}

export default TransactionsList;