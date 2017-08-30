import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {
   return (
      <header className="navigation-header">
         <div className="user-profile-box">
            <Link to="/panel/profile">
               <img src="https://placehold.it/60x60" />
               <span>John Laboune</span>
            </Link>
         </div>

         <ul className="navigation-header-links">
            <li><Link to="/logout">Logout</Link></li>
         </ul>
      </header>
   );
}

export default Header;