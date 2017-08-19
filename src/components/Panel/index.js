import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StatsWidget from './StatsWidget/index';

class Panel extends Component {
   constructor() {
      super();

      this.state = {
         client: '',
         account: '',
         income: '',
         expenses: '',
         chartData: [
            { name: "25.08.2017", income: 2400, expenses: 4000 },
            { name: "26.08.2017", income: 1398, expenses: 3000 },
            { name: "27.08.2017", income: 9800, expenses: 2000 },
            { name: "28.08.2017", income: 3908, expenses: 2780 },
            { name: "29.08.2017", income: 4800, expenses: 1890 },
            { name: "30.08.2017", income: 3800, expenses: 2390 },
            { name: "31.08.2017", income: 4300, expenses: 3490 }
         ]
      }
   }

   render() {
      return (
         <div className="container">
            <h1>Welcome {this.state.client.first_name} {this.state.client.last_name}</h1>

            <div className="widget stats-widget">
               <h3>Income change stats</h3>
               <select onChange={this.changeStatsRange.bind(this)} ref="statsRange">
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
               </select>

               <StatsWidget
                  data={this.state.chartData}
                  income={this.state.income}
                  expenses={this.state.expenses}
                  balance={this.state.account.balance}
                  currency={this.state.account.currency} />
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