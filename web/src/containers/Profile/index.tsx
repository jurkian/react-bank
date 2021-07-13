import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

import ProfileHeader from 'components/Profile/Header';
import ProfileStats from 'components/Profile/Stats';
import ProfileLinks from 'components/Profile/Links';

const Profile = props => {
   const links = [
      { href: '/panel/transfers', text: 'Transfers', icon: 'ion-card' },
      {
         href: '/panel/change-details',
         text: 'Change details',
         icon: 'ion-android-checkbox-outline'
      }
   ];

   return (
      <div className="row panel-content">
         <div className="col">
            <section className="module profile">
               <ProfileHeader profile={props.profile} />
               <ProfileStats stats={props.profile.stats} />
               <ProfileLinks links={links} />
            </section>
         </div>
      </div>
   );
};

const mapStateToProps = state => {
   return {
      profile: state.profile.data
   };
};

export default connect(mapStateToProps)(Profile);
