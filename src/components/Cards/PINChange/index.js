import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, changeCardPin } from 'actions/cards';
import AsyncLoader from 'components/AsyncLoader';
import Form from './Form';

class PINChange extends Component {
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
               <section className="pin-change module">
                  <h1>PIN change for {this.props.singleCard.id}. {this.props.singleCard.type} card</h1>

                  <Form changeCardPin={this.props.changeCardPin} />
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
      changeCardPin: pin => dispatch(changeCardPin(parseInt(ownProps.match.params.cardId, 10), pin))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(PINChange);