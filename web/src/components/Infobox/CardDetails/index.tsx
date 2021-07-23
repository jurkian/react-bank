import React from 'react';
import { myPadStart, chunker } from 'tools';

import './style.scss';

type Props = {
   number: number;
   expiresMonth: number;
   expiresYear: number;
};

// const CardDetails = ({ number, expiresMonth, expiresYear }) => {
const CardDetails: React.FC<Props> = (props) => {
   const { number, expiresMonth, expiresYear } = props;

   return (
      <section className="card-details">
         <div className="card-details-row">
            <div>
               <span>Card number</span>
               <p className="big">{chunker(number, 4, '-')}</p>
            </div>
         </div>

         <div className="card-details-row card-details-row-1-2">
            <div>
               <span>Card holder</span>
               <p>John Doe</p>
            </div>
            <div>
               <span>Expiration date</span>
               <p>
                  {myPadStart(expiresMonth, 2, 0)} / {expiresYear}
               </p>
            </div>
         </div>
      </section>
   );
};

export default CardDetails;
