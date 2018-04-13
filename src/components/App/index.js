import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.scss';

import Home from 'components/Home';
import Login from 'components/Login';
import Logout from 'components/Logout';
import CurrencyStats from 'components/CurrencyStats';
import Panel from 'components/Panel';

const App = () => {
   return (
      <Router>
         <div className="app container">
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/login" component={Login} />
               <Route path="/logout" component={Logout} />

               <Route path="/currencies" component={CurrencyStats} />

               <Route path="/panel" component={Panel} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;