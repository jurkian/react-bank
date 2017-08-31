import React, { Component } from 'react';
import IncomeChart from '../Charts/IncomeChart/index';

class IncomeStats extends Component {
   constructor(props) {
      super(props);

      this.state = { account: '', chartData: [] };
   }

   render() {
      return (

         <section className="module stats-widget">
            <h3>Income change stats</h3>
            <p><strong>Account: </strong> {this.state.account.id} {this.state.account.type}</p>
            <p><strong>Balance: </strong> {this.state.account.balance} {this.state.account.currency}</p>

            <select onChange={this.changeStatsRange.bind(this)} ref="statsRange">
               <option value="7">Last 7 days</option>
               <option value="30">Last 30 days</option>
            </select>

            <IncomeChart data={this.state.chartData} />
         </section>
      );
   }

   componentDidMount() {
      // Get default account's info
      // Set income and expenses stats to 7 days, by default
      fetch('http://localhost:3001/accounts/1')
      .then(res => res.json())
      .then(account => this.setState({
         account,
         chartData: account.income_expenses_7_days
      }));
   }

   changeStatsRange() {
      let statsRange = this.refs.statsRange.value;

      if (statsRange === '7') {
         this.setState({ chartData: this.state.account.income_expenses_7_days });
      } else if (statsRange === '30') {
         this.setState({ chartData: this.state.account.income_expenses_30_days });
      }
   }
}

export default IncomeStats;