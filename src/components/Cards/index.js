import React from 'react';
import { Route } from 'react-router-dom';

import CardsList from './List/index';
import SingleCard from './Single/index';
import PINChange from './PINChange/index';
import LimitsChange from './LimitsChange/index';

const Cards = (props) => {
   return (
      <div className="col-xs-12">
         <Route exact path={props.match.url} component={CardsList} />
         <Route exact path={`${props.match.url}/:cardId`} component={SingleCard} />
         <Route exact path={`${props.match.url}/:cardId/change-pin`} component={PINChange} />
         <Route exact path={`${props.match.url}/:cardId/change-limits`} component={LimitsChange} />
      </div>
   );
}

export default Cards;