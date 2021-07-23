import React from 'react';

import './style.scss';

type Props = {
   baseCurrency: string;
   currency: string;
   value: number;
};

const CurrencyBox: React.FC<Props> = (props) => {
   const { baseCurrency, currency, value } = props;

   return (
      <div className="col-sm-6 col-md-4 currency-box">
         <h3>{currency}</h3>
         <p>
            1 {baseCurrency} = {value} {currency}
         </p>
      </div>
   );
};

export default CurrencyBox;
