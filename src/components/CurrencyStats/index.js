import React, { Component } from 'react';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';
import CurrencyStatsHeader from './Header';
import CurrencyList from './List';

class CurrencyStats extends Component {
   constructor() {
      super();

      this.state = { currencyData: [], loaded: false };
   }

   render() {

      if (!this.state.loaded) {
         return <AsyncLoader loaded={this.state.loaded} />;

      } else {
         return (
            <div className="row">
               <div className="col-xs-12">
                  <CurrencyStatsHeader />
                  <CurrencyList currencyData={this.state.currencyData} />
               </div>
            </div>
         );
      }
   }

   componentDidMount() {
      axios.get('https://api.fixer.io/latest', {
         params: {
            symbols: 'AUD,CAD,CHF,CZK,EUR,HUF,JPY,NOK,PLN,RUB,SEK,USD',
            base: 'GBP'
         }
      })
      .then(res => res.data)
      .then(currencyData => {
         this.setState({ currencyData, loaded: true });
      })
      .catch(() => this.setState({ loaded: 0 }));
   }
}

export default CurrencyStats;