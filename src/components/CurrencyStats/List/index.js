import React from 'react';
import PropTypes from 'prop-types';
import CurrencyBox from '../CurrencyBox';

import './style.css';

const CurrencyList = ({ currencyData }) => {
   const currencyRates = currencyData.rates;
   const currencyBoxes = Object.keys(currencyRates).map((currency, i) => {
      return <CurrencyBox key={i} currency={currency} value={currencyRates[currency]} />
   });
   
   return (
      <div className="currency-boxes-container row">
         {currencyBoxes}
      </div>
   );
}

CurrencyList.propTypes = {
   currencyData: PropTypes.object
}

export default CurrencyList;