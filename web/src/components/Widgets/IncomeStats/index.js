import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'tools/firebase';
import subDays from 'date-fns/sub_days';

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
               <h3>Income change stats (30 days)</h3>
               <p>
                  <strong>{this.state.account.type} account</strong> /{' '}
                  {this.state.account.currency.toUpperCase()}
                  / {this.state.account.number}
               </p>

               <IncomeChart data={this.state.chartData} />
            </section>
         );
      }
   }

   componentDidMount() {
      // Get account stats for the last 30 days
      // For the first user's account
      const db = firebase.firestore();
      const startDate = subDays(new Date(), 30);

      db
         .collection('account_stats')
         .where('account_id', '==', this.props.account.id)
         .where('date', '>', startDate)
         .get()
         .then(stats => {
            let chartData = stats.docs.map(doc => doc.data());

            this.setState({
               loaded: true,
               account: this.props.account,
               chartData
            });
         })
         .catch(err => err);
   }
}

const mapStateToProps = state => {
   return {
      account: state.accounts.data[0]
   };
};

export default connect(mapStateToProps)(IncomeStats);
