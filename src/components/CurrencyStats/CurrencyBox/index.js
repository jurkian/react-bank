import React from 'react';
import './style.css';

const CurrencyBox = ({ currency, value }) => {
   return (
      <div className="currency-box col-sm-6 col-md-4">
         <h3>GBP / {currency}</h3>
         {value}
      </div>
   );
}

export default CurrencyBox;