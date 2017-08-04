import React, { Component } from 'react';

class Accounts extends Component {
   constructor() {
      super();

      this.state = { accounts: '' };
   }

   render() {
      return (
         <div className="container">
            <h1>Accounts</h1>
            <p>We have {this.state.accounts.length} accounts right now!</p>
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

export default Accounts;