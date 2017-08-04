import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom';

import Home from '../Home/index';
import About from '../About/index';

import './app.css';

class App extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <Router>
            <div className="container">
               <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/start">Panel</Link></li>
                  <li><Link to="/accounts">Accounts</Link></li>
                  <li><Link to="/transfers">Transfers</Link></li>
                  <li><Link to="/cards">Cards</Link></li>
                  <li><Link to="/transactions">Transactions</Link></li>
                  <li><Link to="/help">Help</Link></li>
               </ul>

               <Route exact path="/" component={Home} />
               <Route path="/about" component={About} />
            </div>
         </Router>
      );
   }
}

export default App;