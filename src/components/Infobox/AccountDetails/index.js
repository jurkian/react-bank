import React from 'react';

import './style.scss';

const AccountDetails = () => {
   return (
      <section className="account-details">
         <div className="card-details-row">
            <div>
               <span>Card number</span>
               <p className="big">4866-1209-0092-8832</p>
            </div>
         </div>

         <div className="card-details-row card-details-row-1-2">
            <div>
               <span>Card holder</span>
               <p>John Doe</p>
            </div>
            <div>
               <span>Expiration date</span>
               <p>January 2022</p>
            </div>
         </div>
      </section>
   );
};

export default AccountDetails;
