// Every logged in user has a JWT token in localStorage
// If it doesn't exist, redirect to /login

// This is just a general check if user has access
// Further checks will be during API connections, with Authentication headers

import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProfile } from 'actions/profile';

import Loader from 'components/UI/Loader';
import AsyncComponentLoader from 'components/Utilities/AsyncComponentLoader';

import Navigation from 'containers/Navigation';
import PanelIntro from 'containers/Panel/Intro';
import PageNotFound from 'components/PageNotFound';

const Accounts = AsyncComponentLoader({
   loader: () => import('containers/Accounts')
});

const Transactions = AsyncComponentLoader({
   loader: () => import('containers/Transactions')
});

const Cards = AsyncComponentLoader({
   loader: () => import('containers/Cards')
});

const Profile = AsyncComponentLoader({
   loader: () => import('containers/Profile')
});

const ProfileChangeDetails = AsyncComponentLoader({
   loader: () => import('containers/Profile/ChangeDetails')
});

const Messages = AsyncComponentLoader({
   loader: () => import('containers/Messages')
});

const Help = AsyncComponentLoader({
   loader: () => import('components/Help')
});

class Panel extends Component {
   // Get user's profile because we use it all over the panel
   componentWillMount() {
      if (!this.props.fetchProfileStatus) {
         this.props.fetchProfile();
      }

      // If user is logged out, redirect to login
      const token = localStorage.getItem('token');

      if (!token) {
         this.props.history.push('/login');
         return null;
      }
   }

   render() {
      if (!this.props.fetchProfileStatus) {
         return <Loader />;
      } else {
         return (
            <Fragment>
               <Route path="/panel" component={Navigation} />

               <Switch>
                  <Route exact path="/panel" component={PanelIntro} />
                  <Route path="/panel/accounts" component={Accounts} />
                  <Route path="/panel/transactions" component={Transactions} />
                  <Route path="/panel/cards" component={Cards} />
                  <Route path="/panel/profile" component={Profile} />
                  <Route path="/panel/change-details" component={ProfileChangeDetails} />
                  <Route path="/panel/messages" component={Messages} />
                  <Route path="/panel/help" component={Help} />
                  <Route component={PageNotFound} />
               </Switch>
            </Fragment>
         );
      }
   }
}

const mapStateToProps = state => {
   return {
      fetchProfileStatus: state.profile.status
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchProfile: () => dispatch(fetchProfile())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
