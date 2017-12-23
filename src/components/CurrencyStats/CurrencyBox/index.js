import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CurrencyBox = ({ baseCurrency, currency, value }) => {
   return (
      <div className="currency-box col-sm-6 col-md-4">
         <h3>GBP / {currency}</h3>
         {value}
      </div>
   );
}

CurrencyBox.propTypes = {
   baseCurrency: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired,
   value: PropTypes.number.isRequired
}

export default CurrencyBox;