import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'components/UI/Loader';
import IncomeChart from '../Charts/IncomeChart';

class IncomeStats extends Component {
   state = { account: {}, chartData: [], loaded: false };

   render() {
      if (!this.state.loaded) {
         return <Loader />;
      } else {
         return (
            <section className="module stats-widget">
               <h3>Income change stats</h3>
               <p>
                  <strong>Account: </strong> {this.state.account.id}{' '}
                  {this.state.account.type}
               </p>
               <p>
                  <strong>Balance: </strong> {this.state.account.balance}{' '}
                  {this.state.account.currency}
               </p>

               <select onChange={this.changeStatsRange} ref="statsRange">
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
               </select>

               <IncomeChart data={this.state.chartData} />
            </section>
         );
      }
   }

   componentDidMount() {
      // Get default account's info
      // Set income and expenses stats to 7 days, by default
      axios
         .get('/accounts/1')
         .then(res => res.data)
         .then(account =>
            this.setState({
               account,
               chartData: account.income_expenses_7_days,
               loaded: true
            })
         )
         .catch(() => this.setState({ loaded: 0 }));
   }

   changeStatsRange = () => {
      let statsRange = this.refs.statsRange.value;

      if (statsRange === '7') {
         this.setState(prevState => ({
            chartData: prevState.account.income_expenses_7_days
         }));
      } else if (statsRange === '30') {
         this.setState(prevState => ({
            chartData: prevState.account.income_expenses_30_days
         }));
      }
   };
}

export default IncomeStats;
