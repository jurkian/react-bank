import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AccountsList from 'components/Accounts/List';
import SingleAccount from 'components/Accounts/Single';

import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

const Accounts: React.FC<Props> = (props) => {
   const { match } = props;

   return (
      <div className="row panel-content">
         <div className="col">
            <Switch>
               <Route exact path={match.url} component={AccountsList} />
               <Route path={`${match.url}/:accId`} component={SingleAccount} />
            </Switch>
         </div>
      </div>
   );
};

export default Accounts;
