import React from 'react';

import './style.css';

const AccountSummary = () => {
   return (
      <section className="account-summary">
         <section className="account-summary-boxes">
            <div>
               <span>Income</span>
               <strong>&pound; 33.49</strong>
            </div>
            <div>
               <span>Expenses</span>
               <strong>&pound; 17.64</strong>
            </div>
         </section>
         
         <section className="account-summary-total">
            <span>Total</span>
            <strong>&pound; 885.34</strong>
         </section>
      </section>
   );
}
 
export default AccountSummary;
