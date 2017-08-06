import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardsList extends Component {
   constructor(props) {
      super(props);

      this.state = { cards: [] };
   }

   render() {

      // Cards
      const cards = this.state.cards
         .map(card => <CardEl key={card.id} {...card} />);

      return (
         <div>
            <h1>Cards</h1>
            <p>You have {this.state.cards.length} active cards</p>

            <ul>
               {cards}
            </ul>
         </div>
      );
   }

   componentDidMount() {
      fetch('http://localhost:3001/cards')
      .then(res => res.json())
      .then(cards => {
         this.setState({ cards });
      });
   }
}

// Single card element
const CardEl = (props) => {
   return (<li>
      <Link to={`/cards/${props.id}`}>
         {props.id}, {props.type}, {props.expires_month}, {props.expires_year}, {props.security_code}, {props.balance}
      </Link>
   </li>);
}

export default CardsList;