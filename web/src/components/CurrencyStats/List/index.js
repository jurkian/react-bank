import React from 'react';
import PropTypes from 'prop-types';
import CurrencyBox from '../CurrencyBox';

import './style.scss';

const CurrencyList = ({ currencyData, baseCurrency }) => {
   const currencyRates = currencyData.rates;
   const currencyBoxes = Object.keys(currencyRates).map((currency, i) => {
      return (
         <CurrencyBox
            key={i}
            baseCurrency={baseCurrency}
            currency={currency}
            value={currencyRates[currency]}
         />
      );
   });

   return <div className="currency-boxes-container row">{currencyBoxes}</div>;
};

CurrencyList.propTypes = {
   currencyData: PropTypes.object.isRequired,
   baseCurrency: PropTypes.string.isRequired
};

export default CurrencyList;
