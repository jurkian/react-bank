import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CardsList from './List/index';
import SingleCard from './Single/index';

class Cards extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="container">
            <Route exact path={this.props.match.url} component={CardsList} />
            <Route path={`${this.props.match.url}/:cardId`} component={SingleCard} />
         </div>
      );
   }
}

export default Cards;