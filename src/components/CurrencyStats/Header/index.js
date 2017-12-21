import React from 'react';
import CurrencyStatsSettings from '../CurrencySettings';

import './style.css';

const CurrencyStatsHeader = () => {
   return (
      <div className="currency-stats-header text-center">
         <h1>Currency statistics</h1>
         <CurrencyStatsSettings />
      </div>
   );
}

export default CurrencyStatsHeader;