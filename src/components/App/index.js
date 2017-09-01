import React from 'react';
import {
   BrowserRouter as Router,
   Route
} from 'react-router-dom';

import './app.css';

import Home from '../Home/index';
import Navigation from '../Navigation/index';
import Login from '../Login/index';
import Logout from '../Logout/index';
import Panel from '../Panel/index';
import Accounts from '../Accounts/index';
import Transactions from '../Transactions/index';
import Cards from '../Cards/index';
import Profile from '../Profile/index';
import ProfileChangeDetails from '../ProfileChangeDetails/index';
import Messages from '../Messages/index';
import Help from '../Help/index';

const App = () => {
   return (
      <Router>
         <div className="app container">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />

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