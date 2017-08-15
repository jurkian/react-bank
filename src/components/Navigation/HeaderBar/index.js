import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
   return (
      <div className="header-bar">
         <div className="user-profile-box">
            <Link to="/panel/profile">
               <img src="https://placehold.it/60x60" />
               <span>John Laboune</span>
            </Link>
         </div>

         <ul className="other-header-links">
            <li>Search for...</li>
            <li>Menu</li>
         </ul>
      </div>
   );
}

export default HeaderBar;