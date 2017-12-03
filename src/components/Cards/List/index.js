import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';

class CardsList extends Component {
   constructor() {
      super();

      this.state = { cards: [], loaded: false };
   }

   render() {

      // Cards
      const cards = this.state.cards
         .map(card => <CardEl key={card.id} {...card} matchUrl={this.props.match.url} />);

      return (
         <div>
            <h1>Cards</h1>

            <AsyncLoader loaded={this.state.loaded}>
               <p>You have {this.state.cards.length} active cards</p>
               <div className="list-group">
                  {cards}
               </div>
            </AsyncLoader>
         </div>
      );
   }

   componentDidMount() {
      axios.get('http://localhost:3001/cards')
      .then(res => res.data)
      .then(cards => this.setState({ cards, loaded: true }))
      .catch(() => this.setState({ loaded: 0 }));
   }
}

// Single card element
const CardEl = (props) => {
   return (
      <Link to={`${props.matchUrl}/${props.id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{props.id}. {props.type} card</h4>
         <p className="list-group-item-text">
            Expires: {props.expires_month}/{props.expires_year}, balance: {props.balance}
         </p>
      </Link>
   );
}

CardEl.propTypes = {
   id: PropTypes.number,
   type: PropTypes.string,
   expires_month: PropTypes.string,
   expires_year: PropTypes.string,
   balance: PropTypes.number
}

export default CardsList;