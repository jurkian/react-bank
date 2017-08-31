import React from 'react';

import '../style.css';
import './style.css';

import CardLogos from '../CardLogos/index';
import CardDetails from '../CardDetails/index';
import AccountName from '../AccountName/index';
import AccountSummary from '../AccountSummary/index';

import MultiModuleButtons from '../../Buttons/MultiModuleButtons/index';
import SingleMultiButton from '../../Buttons/SingleMultiButton/index';

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

         <MultiModuleButtons>
            <SingleMultiButton text="Change PIN" href={`${props.currentUrl}/change-pin`} />
            <SingleMultiButton text="Change limits" href={`${props.currentUrl}/change-limits`} />
         </MultiModuleButtons>
      </section>
   );
}
 
export default CardInfobox;