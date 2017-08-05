import React, { Component } from 'react';

class Transactions extends Component {
   constructor() {
      super();

      this.state = { transactions: [], search: '' };
   }

   render() {

      // Transactions
      // Allow search for payee's name
      const transactions = this.state.transactions
         .filter(trans => trans.payee.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
         .map(trans => <Transaction key={trans.id} {...trans} />);

      return (
         <div className="container">
            <h1>Transactions</h1>
            <p>There are {this.state.transactions.length} finished transactions right now!</p>

            <form className="search-form">
               <input placeholder="Search for..." onChange={this.findTransaction.bind(this)} ref="search" />
            </form>

            <ul>
               {transactions}
            </ul>
         </div>
      );
   }

   componentDidMount() {
      fetch('http://localhost:3001/transactions')
      .then(res => res.json())
      .then(transactions => {
         this.setState({ transactions });
      });
   }

   findTransaction() {
      this.setState({ search: this.refs.search.value });
   }
}

// Single transaction
const Transaction = (props) => <li>{props.id}, {props.date}, {props.payee}, {props.amount}, {props.type}, {props.status}</li>;

export default Transactions;