import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const NavigationHeader = () => {
   return (
      <header className="navigation-header">
         <div className="user-profile-box">
            <Link to="/panel/profile">
               <img src="https://placehold.it/60x60" alt="User profile" />
               <span>John Laboune</span>
            </Link>
         </div>

         <ul className="navigation-header-links">
            <li><Link to="/logout">Logout</Link></li>
            <li className="toggle-menu">
               <button>
                  <i className="ion-navicon-round"></i>
               </button>
            </li>
         </ul>
      </header>
   );
}

export default NavigationHeader;