import React from 'react';
import PropTypes from 'prop-types';
import { myPadStart, chunker } from 'tools';

import './style.scss';

const CardDetails = ({ number, expiresMonth, expiresYear }) => {
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

CardDetails.propTypes = {
   number: PropTypes.number,
   expiresMonth: PropTypes.number,
   expiresYear: PropTypes.number
};

export default CardDetails;
