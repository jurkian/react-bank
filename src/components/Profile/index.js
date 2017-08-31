import React, { Component } from 'react';

import './style.css';

import ProfileHeader from './ProfileHeader/index';
import ProfileStats from './ProfileStats/index';
import ProfileLinks from './ProfileLinks/index';

class Profile extends Component {
   constructor(props) {
      super(props);

      this.state = { client: {} };
   }

   render() {
      const links = [
         { href: '/panel/transactions', text: 'Transactions', icon: 'ion-card' },
         { href: '/panel/change-details', text: 'Change details', icon: 'ion-android-checkbox-outline' }
      ];

      return (
         <div className="row">
            <div className="col-xs-12">
               <section className="profile module">
                  <ProfileHeader client={this.state.client} />
                  <ProfileStats />
                  <ProfileLinks links={links} />
               </section>
            </div>
         </div>
      );
   }

   componentDidMount() {
      // Get logged in client info
      fetch('http://localhost:3001/clients/1')
      .then(res => res.json())
      .then(client => this.setState({ client }));
   }
}

export default Profile;