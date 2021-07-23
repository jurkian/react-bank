import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as actions from 'actions';

import { useAppSelector, useAppDispatch } from '@hooks';

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

type Props = {};

// Get all user's initial data or redirect back to /login if not logged in
// This is all handled in withAuth HOC
const Panel: React.FC<Props> = (props) => {
   const dispatch = useAppDispatch();

   const initialDataStatus = useAppSelector((state) => state.panel.initialDataStatus);

   const setAuthStatus = (status: boolean) => dispatch(actions.setAuthStatus(status));
   const fetchInitialData = () => dispatch(actions.fetchInitialData());

   const checkValidToken = async () => {
      try {
         await isValidToken();

         setAuthStatus(true);
         fetchInitialData();
      } catch (err) {
         setAuthStatus(false);
      }
   };

   useEffect(() => {
      checkValidToken();
   }, []);

   if (!initialDataStatus) {
      return <Loader />;
   }

   return (
      <>
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
      </>
   );
};

export default Panel;
