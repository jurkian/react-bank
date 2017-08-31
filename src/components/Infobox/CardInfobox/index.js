import React from 'react';

import '../style.css';
import './style.css';

import CardLogos from '../CardLogos/index';
import CardDetails from '../CardDetails/index';
import AccountName from '../AccountName/index';
import AccountSummary from '../AccountSummary/index';

const CardInfobox = (props) => {
   return (
      <section className="infobox card-infobox module">
         <header>
            <CardLogos type="visa" />
            <CardDetails />
         </header>

         <AccountName />
         <AccountSummary />
      </section>
   );
}
 
export default CardInfobox;