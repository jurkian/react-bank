import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

import Loader from 'components/UI/Loader';
import AsyncComponentLoader from 'tools/AsyncComponentLoader';

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
   // Get all user's initial data
   // Or redirect back to /login if not logged in
   componentDidMount() {
      if (this.props.authStatus) {
         this.props.fetchInitialData(this.props.userEmail);
      } else {
         this.doRedirect();
      }
   }

   shouldComponentUpdate(nextProps) {
      // If user is logged out, redirect to /login
      // Second check to make sure props were available at the moment
      if (!nextProps.authStatus) {
         this.doRedirect();
      }

      return true;
   }

   doRedirect() {
      this.props.history.push('/login');
      return false;
   }

   render() {
      if (!this.props.initialDataStatus) {
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
      initialDataStatus: state.panel.initialDataStatus,
      authStatus: state.auth.status,
      userEmail: state.auth.userEmail
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchInitialData: email => dispatch(actions.fetchInitialData(email))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
