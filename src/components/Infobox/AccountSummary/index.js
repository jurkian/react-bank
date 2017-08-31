import React from 'react';

import './style.css';

const AccountSummary = (props) => {
   return (
      <section className="account-summary">
         <section className="account-summary-boxes">
            <div>
               <span>Income</span>
               <strong>&pound; {props.income_7_days}</strong>
            </div>
            <div>
               <span>Expenses</span>
               <strong>&pound; {props.expenses_7_days}</strong>
            </div>
         </section>
         
         <section className="account-summary-total">
            <span>Total</span>
            <strong>&pound; {props.balance}</strong>
         </section>
      </section>
   );
}
 
export default AccountSummary;
