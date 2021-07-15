import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TransfersList from 'components/Transfers/List';
import SingleTransfer from 'components/Transfers/Single';
import NewTransfer from 'components/Transfers/New';

type Props = {};

const Transfers: React.FC<Props> = (props) => (
   <div className="row panel-content">
      <div className="col">
         <Switch>
            <Route exact path="/panel/transfers" component={TransfersList} />
            <Route path="/panel/transfers/new" component={NewTransfer} />
            <Route path="/panel/transfers/:transId" component={SingleTransfer} />
         </Switch>
      </div>
   </div>
);

export default Transfers;
