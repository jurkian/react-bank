import React from 'react';

import '../style.scss';
import './style.scss';

import AccountDetails from '../AccountDetails';
import AccountName from '../AccountName';
import AccountSummary from '../AccountSummary';

const CardInfobox = () => {
   return (
      <section className="module infobox account-infobox">
         <header>
            <AccountDetails />
         </header>

         <AccountName />
         <AccountSummary />
      </section>
   );
};

export default CardInfobox;
