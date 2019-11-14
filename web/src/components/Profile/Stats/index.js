import React from 'react';
import './style.scss';

const ProfileStats = ({ stats }) => {
   return (
      <section className="profile-stats">
         <div className="stats-green">
            <strong>{stats.accsDetails.count}</strong>
            <span>Accounts</span>
         </div>
         <div className="stats-blue">
            <strong>{stats.accsDetails.balance}</strong>
            <span>Balance</span>
         </div>
         <div className="stats-red">
            <strong>{stats.messagesCount}</strong>
            <span>Messages</span>
         </div>
      </section>
   );
};

export default ProfileStats;
