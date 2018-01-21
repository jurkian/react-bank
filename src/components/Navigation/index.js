import React, { Component } from 'react';

import './style.css';

import NavigationHeader from './NavigationHeader/index';
import MainNavigation from './MainNavigation/index';

class Navigation extends Component {
   constructor() {
      super();
      
      this.state = { isMobileNavVisible: false };
   }
   
   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <section className="navigation module">
                  <NavigationHeader toggleMobileNav={this.toggleMobileNav.bind(this)} />
                  <MainNavigation isMobileNavVisible={this.state.isMobileNavVisible} />
               </section>
            </div>
         </div>
      );
   }

   toggleMobileNav() {
      this.setState({ isMobileNavVisible: !this.state.isMobileNavVisible });
   }
}

export default Navigation;