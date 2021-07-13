import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'components/UI/Loader';

import Header from 'components/CurrencyStats/Header';
import CurrencySettings from 'components/CurrencyStats/CurrencySettings';
import CurrencyList from 'components/CurrencyStats/List';
import SingleButton from 'components/UI/Buttons/SingleButton';

import subDays from 'date-fns/subDays';
import format from 'date-fns/format';

import './style.scss';

class CurrencyStats extends Component {
   state = {
      currencyData: [],
      currencies: 'GBP,AUD,CAD,CHF,CZK,EUR,HUF,JPY,NOK,PLN,RUB,SEK,USD'.split(','),
      baseCurrency: 'GBP',
      date: subDays(new Date(), 1),
      loaded: false
   };

   render() {
      if (!this.state.loaded) {
         return <Loader />;
      } else {
         return (
            <div className="row">
               <div className="col">
                  <section className="module container-module currency-stats">
                     <div className="currency-stats-header text-center">
                        <Header />
                        <CurrencySettings
                           date={this.state.date}
                           currencies={this.state.currencies}
                           baseCurrency={this.state.baseCurrency}
                           onBaseCurrencyChange={this.onBaseCurrencyChange}
                           onCurrencyDateChange={this.onCurrencyDateChange}
                        />
                     </div>

                     <CurrencyList
                        currencyData={this.state.currencyData}
                        baseCurrency={this.state.baseCurrency}
                     />

                     <div className="currency-stats-leave-section">
                        <SingleButton text="Go back to home page &raquo;" href="/" size="lg" />
                     </div>
                  </section>
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
      // Then, convert it from array to string (needed for API request)
      const currencies = this.state.currencies
         .filter(curr => curr !== this.state.baseCurrency)
         .join(',');

      let apiParams = {
         symbols: currencies,
         base: this.state.baseCurrency
      };

      // If date is set - add it to request
      if (this.state.date) {
         apiParams.date = format(this.state.date, 'yyyy.MM.dd');
      }

      axios
         .get('https://api.exchangeratesapi.io/latest', { params: apiParams })
         .then(res => res.data)
         .then(currencyData => {
            this.setState({ currencyData, loaded: true });
         })
         .catch(() => this.setState({ loaded: 0 }));
   }

   onBaseCurrencyChange = baseCurrency => {
      this.setState({ baseCurrency, loaded: false }, () => {
         this.makeAPIRequest();
      });
   };

   onCurrencyDateChange = date => {
      this.setState({ date, loaded: false }, () => {
         this.makeAPIRequest();
      });
   };
}

export default CurrencyStats;
