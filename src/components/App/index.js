import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

import Home from 'components/Home';
import Login from 'components/Login';
import Logout from 'components/Logout';
import CurrencyStats from 'components/CurrencyStats';
import Panel from 'components/Panel';

const App = () => {
   return (
      <Router>
         <div className="app container">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />

            <Route path="/currencies" component={CurrencyStats} />

            <Route path="/panel" component={Panel} />
         </div>
      </Router>
   );
}

export default App;