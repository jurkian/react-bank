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
            <CardDetails
               number={props.number}
               expires_month={props.expires_month}
               expires_year={props.expires_year} />
         </header>

         <AccountName />
         <AccountSummary
            balance={props.balance} 
            income_7_days={props.income_7_days}
            expenses_7_days={props.expenses_7_days} />
      </section>
   );
}
 
export default CardInfobox;