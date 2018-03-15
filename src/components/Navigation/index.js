import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                  <NavigationHeader
                     toggleMobileNav={this.toggleMobileNav.bind(this)}
                     user={this.props.user}
                  />
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

const mapStateToProps = (state) => {
   return {
      user: state.profile.data[0]
   }
};

export default connect(mapStateToProps)(Navigation);