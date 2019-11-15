import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const CurrencyBox = ({ baseCurrency, currency, value }) => {
   return (
      <div className="col-sm-6 col-md-4 currency-box">
         <h3>{currency}</h3>
         <p>
            1 {baseCurrency} = {value} {currency}
         </p>
      </div>
   );
};

CurrencyBox.propTypes = {
   baseCurrency: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired,
   value: PropTypes.number.isRequired
};

export default CurrencyBox;
