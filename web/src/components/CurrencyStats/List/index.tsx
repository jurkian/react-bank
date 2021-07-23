import React from 'react';
import CurrencyBox from '../CurrencyBox';

import './style.scss';

type Props = {
   currData: { rates: [] };
   baseCurrency: string;
};

const CurrencyList: React.FC<Props> = (props) => {
   const { currData, baseCurrency } = props;

   const currencyRates = currData.rates;
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

export default CurrencyList;
