import React, { Component } from 'react';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';
import moment from 'moment';
import CurrencyStatsHeader from './Header';
import CurrencyStatsSettings from './CurrencySettings';
import CurrencyList from './List';
import SingleButton from 'components/Buttons/SingleButton';

import './style.css';

class CurrencyStats extends Component {
   constructor() {
      super();

      this.state = {
         currencyData: [],
         currencies: 'GBP,AUD,CAD,CHF,CZK,EUR,HUF,JPY,NOK,PLN,RUB,SEK,USD'.split(','),
         baseCurrency: 'GBP',
         date: moment().subtract(1, 'day').format('YYYY-MM-DD'),
         loaded: false
      };
   }

   render() {
      if (!this.state.loaded) {
         return <AsyncLoader loaded={this.state.loaded} />;

      } else {
         return (
            <div className="row">
               <div className="col-xs-12">
                  <div className="currency-stats-header text-center">
                     <CurrencyStatsHeader />
                     <CurrencyStatsSettings
                        currencies={this.state.currencies}
                        baseCurrency={this.state.baseCurrency}
                        onBaseCurrencyChange={this.onBaseCurrencyChange.bind(this)}
                        onCurrencyDateChange={this.onCurrencyDateChange.bind(this)} />
                  </div>

                  <CurrencyList
                     currencyData={this.state.currencyData}
                     baseCurrency={this.state.baseCurrency} />

                  <div className="currency-stats-leave-section">
                     <SingleButton text="Go back to home page &raquo;" href="/" size="lg" />
                  </div>
               </div>
            </div>
         );
      }
   }

   componentDidMount() {
      this.makeAPIRequest();
   }

   makeAPIRequest() {
      // Remove baseCurrency from currencies list - it wouldn't make any sense
      const currencies = this.state.currencies.filter(curr =>
         curr !== this.state.baseCurrency).join(',');

      let apiParams = {
         symbols: currencies,
         base: this.state.baseCurrency
      }

      // If date is set - add it to request
      if (this.state.date) {
         apiParams.date = this.state.date;
      }

      axios.get('https://api.fixer.io/latest', { params: apiParams })
      .then(res => res.data)
      .then(currencyData => {
         this.setState({ currencyData, loaded: true });
      })
      .catch(() => this.setState({ loaded: 0 }));
   }

   onBaseCurrencyChange(baseCurrency) {
      this.setState({ baseCurrency, loaded: false }, () => {
         this.makeAPIRequest();
      });
   }

   onCurrencyDateChange(date) {
      this.setState({ date: date.format('YYYY-MM-DD'), loaded: false }, () => {
         this.makeAPIRequest();
      });
   }
}

export default CurrencyStats;