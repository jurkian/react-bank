import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from 'hoc/Layout';

import './app.scss';

import Home from 'containers/Home';
import Login from 'containers/Login';
import Logout from 'components/Logout';
import CurrencyStats from 'containers/CurrencyStats';
import Panel from 'containers/Panel';
import PageNotFound from 'components/PageNotFound';

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