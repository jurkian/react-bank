import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const NavigationHeader = props => {
   return (
      <header className="navigation-header">
         <div className="user-profile-box">
            <Link to="/panel/profile">
               <img src="https://placehold.it/60x60" alt="User profile" />
               <span>
                  {props.user.firstName} {props.user.lastName}
               </span>
            </Link>
         </div>

         <ul className="navigation-header-links">
            <li>
               <Link to="/logout">Logout</Link>
            </li>
            <li className="toggle-menu">
               <button onClick={props.toggleMobileNav}>
                  <i className="ion-navicon-round" />
               </button>
            </li>
         </ul>
      </header>
   );
};

export default NavigationHeader;
