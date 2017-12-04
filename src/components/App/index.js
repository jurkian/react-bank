import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

import Home from 'components/Home';
import Navigation from 'components/Navigation';
import Login from 'components/Login';
import Logout from 'components/Logout';
import Panel from 'components/Panel';
import Accounts from 'components/Accounts';
import Transactions from 'components/Transactions';
import Cards from 'components/Cards';
import Profile from 'components/Profile';
import ProfileChangeDetails from 'components/ProfileChangeDetails';
import Messages from 'components/Messages';
import Help from 'components/Help';
import Auth from 'components/Auth';

const App = () => {
   return (
      <Router>
         <div className="app container">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />

            <Route path="/panel" component={Auth} />
            <Route path="/panel" component={Navigation} />
            <Route exact path="/panel" component={Panel} />

            <Route path="/panel/accounts" component={Accounts} />
            <Route path="/panel/transactions" component={Transactions} />
            <Route path="/panel/cards" component={Cards} />
            <Route path="/panel/profile" component={Profile} />
            <Route path="/panel/change-details" component={ProfileChangeDetails} />
            <Route path="/panel/messages" component={Messages} />
            <Route path="/panel/help" component={Help} />
         </div>
      </Router>
   );
}

export default App;