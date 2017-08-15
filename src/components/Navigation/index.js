import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeaderBar from './HeaderBar/index';
import MainNavigation from './MainNavigation/index';

const Navigation = () => {
   return (
      <nav className="col-xs-12">
         <HeaderBar />
         <MainNavigation />
      </nav>
   );
}

export default Navigation;