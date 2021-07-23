import React from 'react';

import './style.scss';

type Props = {
   income7Days: number;
   expenses7Days: number;
   balance: number;
};

const AccountSummary: React.FC<Props> = (props) => {
   return (
      <section className="account-summary">
         <section className="account-summary-boxes">
            <div>
               <span>Income</span>
               <strong>&pound; {props.income7Days}</strong>
            </div>
            <div>
               <span>Expenses</span>
               <strong>&pound; {props.expenses7Days}</strong>
            </div>
         </section>

         <section className="account-summary-total">
            <span>Total</span>
            <strong>&pound; {props.balance}</strong>
         </section>
      </section>
   );
};

export default AccountSummary;
