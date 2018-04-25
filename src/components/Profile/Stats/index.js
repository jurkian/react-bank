import React from 'react';
import './style.scss';

const ProfileStats = () => {
   return (
      <section className="profile-stats">
         <div className="stats-green">
            <strong>2</strong>
            <span>Accounts</span>
         </div>
         <div className="stats-blue">
            <strong>288.37</strong>
            <span>Balance</span>
         </div>
         <div className="stats-red">
            <strong>7</strong>
            <span>Messages</span>
         </div>
      </section>
   );
};

export default ProfileStats;
