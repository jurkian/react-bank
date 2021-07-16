import React from 'react';

import './style.scss';

const AccountName: React.FC = () => {
   return (
      <section className="account-name">
         <h3>Classic account</h3>
         <span>Summary for last 7 days</span>
      </section>
   );
};

export default AccountName;
