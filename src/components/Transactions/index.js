import React, { Component } from 'react';

class Transactions extends Component {
   constructor() {
      super();

      this.state = { transactions: [] };
   }

   render() {
      const transactions = this.state.transactions.map((el, i) => {
         return <Transaction key={i} {...this.state.transactions[i]} />
      });

      return (
         <div className="container">
            <h1>Transactions</h1>
            <p>There are {this.state.transactions.length} finished transactions right now!</p>
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
}

// Single transaction
const Transaction = (props) => <li>{props.id}, {props.date}, {props.amount}, {props.type}, {props.status}</li>;

export default Transactions;