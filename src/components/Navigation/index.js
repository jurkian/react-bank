import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
   return (
      <nav>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/panel">Panel</Link></li>
            <li><Link to="/accounts">Accounts</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/cards">Cards</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/messages">Messages</Link></li>
            <li><Link to="/help">Help</Link></li>
         </ul>
      </nav>
   );
}

export default Navigation;