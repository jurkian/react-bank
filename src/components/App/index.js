import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loader from 'components/UI/Loader';
import Layout from 'hoc/Layout';

import Logout from 'components/Logout';
import PageNotFound from 'components/PageNotFound';

import './app.scss';

const Home = Loadable({
   loader: () => import('containers/Home'),
   loading: Loader,
});

const Login = Loadable({
   loader: () => import('containers/Login'),
   loading: Loader,
});

const CurrencyStats = Loadable({
   loader: () => import('containers/CurrencyStats'),
   loading: Loader,
});

const Panel = Loadable({
   loader: () => import('containers/Panel'),
   loading: Loader,
});

const App = () => (
   <Layout>
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/logout" component={Logout} />
         <Route path="/currencies" component={CurrencyStats} />
         <Route path="/panel" component={Panel} />
         <Route exact path="/" component={Home} />
         <Route component={PageNotFound} />
      </Switch>
   </Layout>
);

export default App;