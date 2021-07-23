import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './style.scss';

type Props = {
   isMobileNavVisible: boolean;
};

const MainNavigation: React.FC<Props> = (props) => {
   let navClasses = classNames({
      'main-nav': true,
      'navigation-visible': props.isMobileNavVisible,
   });

   return (
      <nav className={navClasses}>
         <ul>
            <li>
               <NavLink to="/panel" exact={true}>
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-home" />
                     </div>
                     <span>Home</span>
                  </div>
               </NavLink>
            </li>
            <li>
               <NavLink to="/panel/accounts">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-clipboard" />
                     </div>
                     <span>Accounts</span>
                  </div>
               </NavLink>
            </li>
            <li>
               <NavLink to="/panel/transfers">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-arrow-swap" />
                     </div>
                     <span>Transfers</span>
                  </div>
               </NavLink>
            </li>
            <li>
               <NavLink to="/panel/cards">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-card" />
                     </div>
                     <span>Cards</span>
                  </div>
               </NavLink>
            </li>
            <li>
               <NavLink to="/panel/messages">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-chatbox-working" />
                     </div>
                     <span>Messages</span>
                  </div>
               </NavLink>
            </li>
            <li>
               <NavLink to="/panel/profile">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-person" />
                     </div>
                     <span>Profile</span>
                  </div>
               </NavLink>
            </li>
            <li>
               <NavLink to="/panel/help">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-help" />
                     </div>
                     <span>Help</span>
                  </div>
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default MainNavigation;
