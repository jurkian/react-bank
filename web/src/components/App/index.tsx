import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAppDispatch } from '@hooks';
import * as actions from 'actions';

import { updateAPIConfig } from 'api/base';
import { isValidToken } from 'tools';

import Layout from 'containers/Layout';

import Home from 'containers/Home';
import CurrencyStats from 'containers/CurrencyStats';
import Panel from 'containers/Panel';

import Login from 'containers/Auth/Login';
import Register from 'containers/Auth/Register';
import Logout from 'components/Auth/Logout';
import PageNotFound from 'components/PageNotFound';

import './app.scss';

const App: React.FC = () => {
   const dispatch = useAppDispatch();

   const setAuthStatus = (status: boolean) => dispatch(actions.setAuthStatus(status));

   useEffect(() => {
      isValidToken()
         .then((token) => {
            updateAPIConfig({ authToken: token });
            setAuthStatus(true);
         })
         .catch(() => {
            setAuthStatus(false);
         });
   }, []);

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
};

export default App;
