import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CardsList from './List/index';
import SingleCard from './Single/index';
import PINChange from './PINChange/index';
import LimitsChange from './LimitsChange/index';

class Cards extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="container">
            <Route exact path={this.props.match.url} component={CardsList} />
            <Route exact path={`${this.props.match.url}/:cardId`} component={SingleCard} />
            <Route exact path={`${this.props.match.url}/:cardId/change-pin`} component={PINChange} />
            <Route exact path={`${this.props.match.url}/:cardId/change-limits`} component={LimitsChange} />
         </div>
      );
   }
}

export default Cards;