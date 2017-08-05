import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Panel extends Component {
   constructor() {
      super();

      this.state = { client: '', account: '', income: '', expenses: '' }
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
               <h3>Income change stats</h3>
               <select onChange={this.changeStatsRange.bind(this)} ref="statsRange">
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
               </select>

               <p>Income: {this.state.income} {this.state.account.currency}</p>
               <p>Expenses: {this.state.expenses} {this.state.account.currency}</p>
               <p>Balance: {this.state.account.balance} {this.state.account.currency}</p>
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
      // Set income and expenses stats to 7 days, by default
      fetch('http://localhost:3001/accounts/1')
      .then(res => res.json())
      .then(account => this.setState({ account, income: account.income_7_days, expenses: account.expenses_7_days }));
   }

   changeStatsRange() {
      let statsRange = this.refs.statsRange.value;

      if (statsRange === "7") {
         this.setState({
            income: this.state.account.income_7_days,
            expenses: this.state.account.expenses_7_days
         });

      } else if (statsRange === "30") {
         this.setState({
            income: this.state.account.income_30_days,
            expenses: this.state.account.expenses_30_days
         });
      }
   }
}

export default Panel;