import React from 'react';

import './style.css';

const CardDetails = (props) => {
   return (
      <section className="card-details">
         <div className="card-details-row">
            <div>
               <span>Card number</span>
               <p className="big">{props.number}</p>
            </div>
         </div>

         <div className="card-details-row card-details-row-1-2">
            <div>
               <span>Card holder</span>
               <p>John Doe</p>
            </div>
            <div>
               <span>Expiration date</span>
               <p>{props.expires_month} / {props.expires_year}</p>
            </div>
         </div>
      </section>
   );
}
 
export default CardDetails;
