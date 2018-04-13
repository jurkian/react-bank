// Every logged in user has a JWT token in localStorage
// If it doesn't exist, redirect to /login

// This is just a general check if user has access
// Further checks will be during API connections, with Authentication headers

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProfile } from 'actions/profile';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';

import Navigation from 'components/Navigation';
import PanelHome from 'components/PanelHome';
import Accounts from 'components/Accounts';
import Transactions from 'components/Transactions';
import Cards from 'components/Cards';
import Profile from 'components/Profile';
import ProfileChangeDetails from 'components/ProfileChangeDetails';
import Messages from 'components/Messages';
import Help from 'components/Help';

const Fragment = React.Fragment;

class Panel extends Component {

   // Get user's profile because we use it all over the panel
   componentWillMount() {
      if (!this.props.fetchProfileStatus) {
         this.props.fetchProfile();
      }
   }

   render() {
      // Authorization
      const token = localStorage.getItem('user_token');

      if (!token) {
         this.props.history.push('/login');
         return;
      }

      // Set default Authorization header for axios
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      if (!this.props.fetchProfileStatus) {
         return <AsyncLoader loaded={this.props.fetchProfileStatus} />;

      } else {
         return (
            <Fragment>
               <Route path="/panel" component={Navigation} />

               <Switch>
                  <Route exact path="/panel" component={PanelHome} />
                  <Route path="/panel/accounts" component={Accounts} />
                  <Route path="/panel/transactions" component={Transactions} />
                  <Route path="/panel/cards" component={Cards} />
                  <Route path="/panel/profile" component={Profile} />
                  <Route path="/panel/change-details" component={ProfileChangeDetails} />
                  <Route path="/panel/messages" component={Messages} />
                  <Route path="/panel/help" component={Help} />
               </Switch>
            </Fragment>
         );
      }
   }
}

const mapStateToProps = (state) => {
   return {
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
)(Panel);