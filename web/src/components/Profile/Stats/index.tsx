import React from 'react';
import './style.scss';

const ProfileStats = ({ stats }) => {
   return (
      <section className="profile-stats">
         <div className="stats-accounts">
            <strong>{stats.accsDetails.count}</strong>
            <span>Accounts</span>
         </div>
         <div className="stats-balance">
            <strong>{stats.accsDetails.balance}</strong>
            <span>Balance</span>
         </div>
         <div className="stats-messages">
            <strong>{stats.messagesCount}</strong>
            <span>Messages</span>
         </div>
      </section>
   );
};

export default ProfileStats;
