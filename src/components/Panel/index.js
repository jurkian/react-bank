import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Panel extends Component {
   constructor() {
      super();

      this.state = { client: '', accountInfo: '' }
   }

   render() {
      return (
         <div className="container">
            <h1>Panel</h1>

            <nav>
               <ul>
                  <li>
                     <Link to="/accounts">
                        <button>Go to accounts</button>
                     </Link>
                  </li>
                  <li>
                     <Link to="/transactions">
                        <button>Go to transactions</button>
                     </Link>
                  </li>
                  <li>
                     <Link to="/cards">
                        <button>Go to cards ({this.state.client.cards_no})</button>
                     </Link>
                  </li>
                  <li>
                     <Link to="/messages">
                        <button>Go to messages ({this.state.client.messages_no})</button>
                     </Link>
                  </li>
                  <li>
                     <Link to="/profile">
                        <button>Go to profile</button>
                     </Link>
                  </li>
               </ul>
            </nav>

            <div className="widget stats-widget">
               <h3>Income change stats <small>(last 7 days)</small></h3>
               <select>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
               </select>

               <p>Income: {this.state.accountInfo.income_7_days} {this.state.accountInfo.account_currency}</p>
               <p>Expenses: {this.state.accountInfo.expenses_7_days} {this.state.accountInfo.account_currency}</p>
               <p>Balance: {this.state.accountInfo.balance} {this.state.accountInfo.account_currency}</p>
            </div>

         </div>
      );
   }

   componentDidMount() {

      // Get logged in client info
      fetch('http://localhost:3001/clients/1')
      .then(res => res.json())
      .then(client => this.setState({ client }));

      // Get default account's info
      fetch('http://localhost:3001/accounts/1')
      .then(res => res.json())
      .then(accountInfo => this.setState({ accountInfo }));
   }
}

export default Panel;