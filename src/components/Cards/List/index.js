import React from 'react';
import { connect } from 'react-redux';
import CardsListEl from '../ListElement';

const CardsList = (props) => {
   const cards = props.cards.map(card => (
      <CardsListEl key={card.id} {...card} matchUrl={props.match.url} />
   ));

   return (
      <div>
         <h1>Cards</h1>

         <p>You have {props.cards.length} active cards</p>
         <div className="list-group">{cards}</div>
      </div>
   );
};

const mapStateToProps = state => {
   return {
      cards: state.cards.data
   };
};

export default connect(mapStateToProps)(CardsList);