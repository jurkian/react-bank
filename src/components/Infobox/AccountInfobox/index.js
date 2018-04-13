import React from 'react';

import '../style.scss';
import './style.scss';

import AccountDetails from '../AccountDetails/index';
import AccountName from '../AccountName/index';
import AccountSummary from '../AccountSummary/index';

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
}
 
export default CardInfobox;
