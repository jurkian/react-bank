import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from 'actions/profile';
import AsyncLoader from 'components/AsyncLoader';

import './style.css';

import ProfileHeader from './ProfileHeader/index';
import ProfileStats from './ProfileStats/index';
import ProfileLinks from './ProfileLinks/index';

class Profile extends Component {
   componentWillMount() {
      this.props.fetchProfile();
   }

   render() {
      const links = [
         { href: '/panel/transactions', text: 'Transactions', icon: 'ion-card' },
         { href: '/panel/change-details', text: 'Change details', icon: 'ion-android-checkbox-outline' }
      ];

      if (!this.props.fetchProfileStatus) {
         return <AsyncLoader loaded={this.props.fetchProfileStatus} />;

      } else {
         return (
            <div className="row">
   
               <div className="col-xs-12">
                  <section className="profile module">
                     <ProfileHeader profile={this.props.profile} />
                     <ProfileStats />
                     <ProfileLinks links={links} />
                  </section>
               </div>
            </div>
         );
      }
   }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profile.data[0],
      fetchProfileStatus: state.profile.status
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchProfile: () => dispatch(fetchProfile())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Profile);