import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

import { updateAPIConfig } from 'api/base';
import { isValidToken } from 'tools';

import Layout from 'hoc/Layout';

import Home from 'containers/Home';
import CurrencyStats from 'containers/CurrencyStats';
import Panel from 'containers/Panel';

import Login from 'containers/Auth/Login';
import Register from 'containers/Auth/Register';
import Logout from 'components/Auth/Logout';
import PageNotFound from 'components/PageNotFound';

import './app.scss';

class App extends Component {
   componentDidMount() {
      isValidToken()
         .then(token => {
            updateAPIConfig({ authToken: token });
            this.props.setAuthStatus(true);
         })
         .catch(() => {
            this.props.setAuthStatus(false);
         });
   }

   render() {
      return (
         <Layout>
            <Switch>
               <Route path="/panel" component={Panel} />
               <Route path="/currencies" component={CurrencyStats} />
               <Route path="/login" component={Login} />
               <Route path="/logout" component={Logout} />
               <Route path="/register" component={Register} />
               <Route exact path="/" component={Home} />
               <Route component={PageNotFound} />
            </Switch>
         </Layout>
      );
   }
}

const mapDispatchToProps = dispatch => {
   return {
      setAuthStatus: status => dispatch(actions.setAuthStatus(status))
   };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
