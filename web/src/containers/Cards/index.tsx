import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import CardsList from 'components/Cards/List';
import SingleCard from 'components/Cards/Single';
import PINChange from 'components/Cards/PINChange';
import LimitsChange from 'components/Cards/LimitsChange';

interface Props extends RouteComponentProps {}

const Cards: React.FC<Props> = (props) => {
   const { match } = props;

   return (
      <div className="row panel-content">
         <div className="col">
            <Switch>
               <Route exact path={match.url} component={CardsList} />
               <Route exact path={`${match.url}/:cardId`} component={SingleCard} />
               <Route path={`${match.url}/:cardId/change-pin`} component={PINChange} />
               <Route path={`${match.url}/:cardId/change-limits`} component={LimitsChange} />
            </Switch>
         </div>
      </div>
   );
};

export default Cards;
