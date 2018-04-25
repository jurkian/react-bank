import React from 'react';

import '../style.scss';
import './style.scss';

import AccountDetails from '../AccountDetails';
import AccountName from '../AccountName';
import AccountSummary from '../AccountSummary';

const CardInfobox = () => {
   return (
      <section className="infobox account-infobox module">
         <header>
            <AccountDetails />
         </header>

         <AccountName />
         <AccountSummary />
      </section>
   );
};

export default CardInfobox;
