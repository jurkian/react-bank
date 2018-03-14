import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, changeCardLimits } from 'actions/cards';
import AsyncLoader from 'components/AsyncLoader';
import Form from './Form';

class LimitsChange extends Component {
   componentWillMount() {
      if (!this.props.fetchCardsStatus) {
         this.props.fetchCards();
      }
   }

   render() {
      if (!this.props.fetchCardsStatus) {
         return <AsyncLoader loaded={this.props.fetchCardsStatus} />;

      } else {

         return (
            <div className="col-sm-6 col-sm-offset-3">
               <section className="limits-change module">
                  <h1>Limits change for {this.props.singleCard.id}. {this.props.singleCard.type} card</h1>

                  <Form changeCardLimits={this.props.changeCardLimits} />
               </section>
            </div>
         );
      }
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      singleCard: state.cards.data[ownProps.match.params.cardId - 1],
      fetchCardsStatus: state.cards.status
   }
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      fetchCards: () => dispatch(fetchCards()),
      changeCardLimits: (newWithdrawalLimit, newOnlineLimit) =>
         dispatch(changeCardLimits(parseInt(ownProps.match.params.cardId), newWithdrawalLimit, newOnlineLimit))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LimitsChange);