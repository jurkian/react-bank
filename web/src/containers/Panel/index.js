import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import withAuth from 'hoc/WithAuth';

import { isValidToken } from 'tools';

import Loader from 'components/UI/Loader';

import Navigation from 'containers/Navigation';
import PanelIntro from 'containers/Panel/Intro';
import PageNotFound from 'components/PageNotFound';

import Accounts from 'containers/Accounts';
import Transfers from 'containers/Transfers';
import Cards from 'containers/Cards';
import Profile from 'containers/Profile';
import ProfileChangeDetails from 'containers/Profile/ChangeDetails';
import Messages from 'containers/Messages';
import Help from 'components/Help';

// Get all user's initial data or redirect back to /login if not logged in
// This is all handled in withAuth HOC
class Panel extends Component {
   componentDidMount() {
      isValidToken()
         .then(() => {
            this.props.setAuthStatus(true);
            this.props.fetchInitialData();
         })
         .catch(() => {
            this.props.setAuthStatus(false);
         });
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
                  <Route path="/panel/transfers" component={Transfers} />
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
      initialDataStatus: state.panel.initialDataStatus
   };
};

const mapDispatchToProps = dispatch => {
   return {
      setAuthStatus: status => dispatch(actions.setAuthStatus(status)),
      fetchInitialData: () => dispatch(actions.fetchInitialData())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Panel));
