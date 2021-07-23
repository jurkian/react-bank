import React from 'react';

import '../style.scss';
import './style.scss';

import CardLogos from '../CardLogos';
import CardDetails from '../CardDetails';
import AccountName from '../AccountName';
import AccountSummary from '../AccountSummary';

import MultiModuleButtons from 'components/UI/Buttons/MultiModuleButtons';
import SingleMultiButton from 'components/UI/Buttons/SingleMultiButton';

type Props = {
   number: number;
   expiresMonth: number;
   expiresYear: number;
   balance: number;
   income7Days: number;
   expenses7Days: number;
   currentUrl: string;
};

const CardInfobox: React.FC<Props> = (props) => {
   const { number, expiresMonth, expiresYear, currentUrl } = props;

   return (
      <section className="module infobox card-infobox">
         <header>
            <CardLogos type="visa" />
            <CardDetails number={number} expiresMonth={expiresMonth} expiresYear={expiresYear} />
         </header>

         <AccountName />
         <AccountSummary balance={2000} income7Days={3500} expenses7Days={1500} />

         <MultiModuleButtons>
            <SingleMultiButton text="Change PIN" href={`${currentUrl}/change-pin`} />
            <SingleMultiButton text="Change limits" href={`${currentUrl}/change-limits`} />
         </MultiModuleButtons>
      </section>
   );
};

export default CardInfobox;
