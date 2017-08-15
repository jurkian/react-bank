import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
   return (
      <div className="header-bar">
         <div className="user-profile-nav">
            <Link to="/panel/profile">
               <img src="" />
               <span>John Kovalsky</span>
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