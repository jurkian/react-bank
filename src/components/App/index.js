import React from 'react';
import {
   BrowserRouter as Router,
   Route
} from 'react-router-dom';

import './app.css';

import Home from 'components/Home/index';
import Navigation from 'components/Navigation/index';
import Login from 'components/Login/index';
import Logout from 'components/Logout/index';
import Panel from 'components/Panel/index';
import Accounts from 'components/Accounts/index';
import Transactions from 'components/Transactions/index';
import Cards from 'components/Cards/index';
import Profile from 'components/Profile/index';
import ProfileChangeDetails from 'components/ProfileChangeDetails/index';
import Messages from 'components/Messages/index';
import Help from 'components/Help/index';

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