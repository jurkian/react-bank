import React, { Component } from 'react';

import './style.css';

import NavigationHeader from './NavigationHeader/index';
import MainNavigation from './MainNavigation/index';

class Navigation extends Component {
   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <section className="navigation module">
                  <NavigationHeader />
                  <MainNavigation />
               </section>
            </div>
         </div>
      );
   }
}

export default Navigation;