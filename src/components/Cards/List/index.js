import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCards } from "actions/cards";
import CardsListEl from "../ListElement";
import AsyncLoader from "components/AsyncLoader";

class CardsList extends Component {
   componentWillMount() {
      this.props.fetchCards();
   }

   render() {
      const cards = this.props.cards.map(card => (
         <CardsListEl key={card.id} {...card} matchUrl={this.props.match.url} />
      ));

      if (!this.props.fetchCardsStatus) {
         return <AsyncLoader loaded={this.props.fetchCardsStatus} />;
      } else {
         return (
            <div>
               <h1>Cards</h1>

               <p>You have {this.props.cards.length} active cards</p>
               <div className="list-group">{cards}</div>
            </div>
         );
      }
   }
}

const mapStateToProps = state => {
   return {
      cards: state.cards.data,
      fetchCardsStatus: state.cards.status
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchCards: () => dispatch(fetchCards())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
