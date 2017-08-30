import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import NavigationHeader from './NavigationHeader/index';
import MainNavigation from './MainNavigation/index';

class Navigation extends Component {
   constructor(props) {
      super(props);
   }

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
   
   componentDidMount() {
      // When the component is ready, check if user is authenticated
      // If not - redirect to homepage
      if (!localStorage.getItem('user_token')) {
         this.props.history.push('/');
      }
   }

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         this.onPanelRouteChanged();
      }
   }
   
   // On every panel route change, send a request to server to check if user is authenticated
   onPanelRouteChanged() {

      fetch('http://localhost:3001/clients/1', {
         headers: new Headers({
            'x-auth-token': localStorage.getItem('user_token')
         })
      })
      .then(res => res.json())
      .then(res => {
         
         // Get response and make a decision
         // If not authenticated, redirect to homepage
         if (false) {
            this.props.history.push('/');
         }
      });
   }
}

export default Navigation;