import React, { Component } from 'react';

class Transactions extends Component {
   constructor() {
      super();

      this.state = { transactions: '' };
   }

   render() {
      return (
         <div className="container">
            <h1>Transactions</h1>
            <p>There are {this.state.transactions.length} finished transactions right now!</p>
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

export default Transactions;