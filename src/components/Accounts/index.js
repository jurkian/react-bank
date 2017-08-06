import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AccountsList from './List/index';
import SingleAccount from './Single/index';

class Accounts extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="container">
            <Route exact path={this.props.match.url} component={AccountsList} />
            <Route path={`${this.props.match.url}/:accId`} component={SingleAccount} />
         </div>
      );
   }
}

export default Accounts;