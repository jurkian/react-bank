import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Loader from 'components/UI/Loader';
import Header from 'components/CurrencyStats/Header';
import CurrencySettings from 'components/CurrencyStats/CurrencySettings';
import CurrencyList from 'components/CurrencyStats/List';
import SingleButton from 'components/UI/Buttons/SingleButton';

import subDays from 'date-fns/subDays';
import './style.scss';

import makeAPIRequest from './api-request';

interface Props extends RouteComponentProps {}

const CurrencyStats: React.FC<Props> = (props) => {
   const currs = 'GBP,AUD,CAD,CHF,CZK,EUR,HUF,JPY,NOK,PLN,RUB,SEK,USD'.split(',');

   const [currData, setCurrencyData] = useState([]);
   const [baseCurrency, setBaseCurrency] = useState('GBP');
   const [date, setDate] = useState(subDays(new Date(), 1));
   const [isLoaded, setIsLoaded] = useState(false);

   const doAPIRequest = () =>
      makeAPIRequest(date, currs, baseCurrency, setCurrencyData, setIsLoaded);

   const onBaseCurrencyChange = (newCurr: string) => {
      setBaseCurrency(newCurr);
      setIsLoaded(true);

      doAPIRequest();
   };

   const onCurrencyDateChange = (date: Date) => {
      setDate(date);
      setIsLoaded(true);

      doAPIRequest();
   };

   useEffect(() => {
      doAPIRequest();
   }, []);

   if (!isLoaded) {
      return <Loader />;
   }

   return (
      <div className="row">
         <div className="col">
            <section className="module container-module currency-stats">
               <div className="currency-stats-header text-center">
                  <Header />
                  <CurrencySettings
                     date={date}
                     currencies={currs}
                     baseCurrency={baseCurrency}
                     onBaseCurrencyChange={onBaseCurrencyChange}
                     onCurrencyDateChange={onCurrencyDateChange}
                  />
               </div>

               <CurrencyList currData={currData} baseCurrency={baseCurrency} />

               <div className="currency-stats-leave-section">
                  <SingleButton text="Go back to home page &raquo;" href="/" size="lg" />
               </div>
            </section>
         </div>
      </div>
   );
};

export default CurrencyStats;
