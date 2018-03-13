import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from 'actions/cards';
import AsyncLoader from 'components/AsyncLoader';
import Form from './Form';

class LimitsChange extends Component {
   componentWillMount() {
      this.props.fetchCards();
   }

   render() {
      if (!this.props.fetchCardsStatus) {
         return <AsyncLoader loaded={this.props.fetchCardsStatus} />;

      } else {

         return (
            <div className="col-sm-6 col-sm-offset-3">
               <section className="limits-change module">
                  <h1>Limits change for {this.props.singleCard.id}. {this.props.singleCard.type} card</h1>

                  <Form />
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

const mapDispatchToProps = (dispatch) => {
   return {
      fetchCards: () => dispatch(fetchCards())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LimitsChange);