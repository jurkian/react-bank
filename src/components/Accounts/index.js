import React from 'react';
import { Route } from 'react-router-dom';

import AccountsList from './List/index';
import SingleAccount from './Single/index';

const Accounts = (props) => {
   return (
      <div className="col-xs-12">
         <Route exact path={props.match.url} component={AccountsList} />
         <Route path={`${props.match.url}/:accId`} component={SingleAccount} />
      </div>
   );
}

export default Accounts;