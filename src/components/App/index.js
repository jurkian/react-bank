import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

import AsyncComponentLoader from 'components/Utilities/AsyncComponentLoader';
import Layout from 'hoc/Layout';

import Logout from 'components/Auth/Logout';
import PageNotFound from 'components/PageNotFound';

import './app.scss';

const Home = AsyncComponentLoader({
   loader: () => import('containers/Home')
});

const Login = AsyncComponentLoader({
   loader: () => import('containers/Auth/Login')
});

const Register = AsyncComponentLoader({
   loader: () => import('containers/Auth/Register')
});

const CurrencyStats = AsyncComponentLoader({
   loader: () => import('containers/CurrencyStats')
});

const Panel = AsyncComponentLoader({
   loader: () => import('containers/Panel')
});

class App extends Component {
   componentDidMount() {
      // If there is a previous, valid token, try to log the user in
      this.props.tryAutoSignup();
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
      tryAutoSignup: () => dispatch(actions.authCheckState())
   };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
