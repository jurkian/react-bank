import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
   return (
      <nav>
         <ul>
            <li><Link to="/panel">Home</Link></li>
            <li><Link to="/panel/accounts">Accounts</Link></li>
            <li><Link to="/panel/transactions">Transactions</Link></li>
            <li><Link to="/panel/cards">Cards</Link></li>
            <li><Link to="/panel/profile">Profile</Link></li>
            <li><Link to="/panel/messages">Messages</Link></li>
            <li><Link to="/panel/help">Help</Link></li>
         </ul>
      </nav>
   );
}

export default Navigation;