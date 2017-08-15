import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom';

import './app.css';

import Home from '../Home/index';
import Navigation from '../Navigation/index';
import Login from '../Login/index';
import Panel from '../Panel/index';
import Accounts from '../Accounts/index';
import Transactions from '../Transactions/index';
import Cards from '../Cards/index';
import Profile from '../Profile/index';
import Messages from '../Messages/index';
import Help from '../Help/index';

class App extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <div className="app container">
            <Router>
               <section className="content-area">
                  <Route exact path="/" component={Home} />
                  <Route path="/" component={Navigation} />
                  <Route path="/login" component={Login} />
                  <Route path="/panel" component={Panel} />
                  <Route path="/accounts" component={Accounts} />
                  <Route path="/transactions" component={Transactions} />
                  <Route path="/cards" component={Cards} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/messages" component={Messages} />
                  <Route path="/help" component={Help} />
               </section>
            </Router>
         </div>
      );
   }
}

export default App;