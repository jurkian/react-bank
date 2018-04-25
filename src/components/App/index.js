import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AsyncComponentLoader from 'components/Utilities/AsyncComponentLoader';
import Layout from 'hoc/Layout';

import Logout from 'components/Logout';
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

const App = () => (
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

export default App;
