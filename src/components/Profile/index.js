import React, { Component } from 'react';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';

import './style.css';

import ProfileHeader from './ProfileHeader/index';
import ProfileStats from './ProfileStats/index';
import ProfileLinks from './ProfileLinks/index';

class Profile extends Component {
   constructor() {
      super();

      this.state = { client: {}, loaded: false };
   }

   render() {
      const links = [
         { href: '/panel/transactions', text: 'Transactions', icon: 'ion-card' },
         { href: '/panel/change-details', text: 'Change details', icon: 'ion-android-checkbox-outline' }
      ];

      return (
         <div className="row">
            <AsyncLoader loaded={this.state.loaded}>
               <div className="col-xs-12">
                  <section className="profile module">
                     <ProfileHeader client={this.state.client} />
                     <ProfileStats />
                     <ProfileLinks links={links} />
                  </section>
               </div>
            </AsyncLoader>
         </div>
      );
   }

   componentDidMount() {
      // Get logged in client info
      axios.get('http://localhost:3001/clients/1')
      .then(res => res.data)
      .then(client => this.setState({ client, loaded: true }))
      .catch(() => this.setState({ loaded: 0 }));
   }
}

export default Profile;