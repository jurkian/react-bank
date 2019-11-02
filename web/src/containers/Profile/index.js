import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

import ProfileHeader from 'components/Profile/Header';
import ProfileStats from 'components/Profile/Stats';
import ProfileLinks from 'components/Profile/Links';

const Profile = props => {
   const links = [
      { href: '/panel/transactions', text: 'Transactions', icon: 'ion-card' },
      {
         href: '/panel/change-details',
         text: 'Change details',
         icon: 'ion-android-checkbox-outline'
      }
   ];

   return (
      <div className="row panel-content">
         <div className="col-xs-12">
            <section className="profile module">
               <ProfileHeader profile={props.profile} />
               <ProfileStats />
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
