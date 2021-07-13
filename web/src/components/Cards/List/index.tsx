import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CardsListEl from '../ListElement';

const CardsList = ({ cards, match }) => {
   const cardsList = cards.map(card => (
      <CardsListEl key={card._id} {...card} matchUrl={match.url} />
   ));

   return (
      <Fragment>
         <h1>Cards</h1>

         <p>You have {cardsList.length} active cards</p>
         <div className="list-group">{cardsList}</div>
      </Fragment>
   );
};

const mapStateToProps = state => {
   return {
      cards: state.cards.data
   };
};

export default connect(mapStateToProps)(CardsList);
