import React, { Component } from 'react';

class Accounts extends Component {
   constructor() {
      super();

      this.state = { accounts: [] };
   }

   render() {

      // Accounts
      const accounts = this.state.accounts
         .map(acc => <Account key={acc.id} {...acc} />);

      return (
         <div className="container">
            <h1>Accounts</h1>
            <p>We have {this.state.accounts.length} accounts right now!</p>

            <ul>
               {accounts}
            </ul>
         </div>
      );
   }

   componentDidMount() {
      fetch('http://localhost:3001/accounts')
      .then(res => res.json())
      .then(accounts => {
         this.setState({ accounts });
      });
   }

}

// Single account
const Account = (props) => <li>{props.id}, {props.type}, {props.sortcode}, {props.number}, {props.currency}, {props.balance}</li>;

export default Accounts;