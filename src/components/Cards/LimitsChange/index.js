import React from 'react';
import { connect } from 'react-redux';
import { changeCardLimits } from 'actions/cards';
import Form from './Form';

const LimitsChange = (props) => {
   return (
      <div className="col-sm-6 col-sm-offset-3">
         <section className="limits-change module">
            <h1>Limits change for {props.singleCard.id}. {props.singleCard.type} card</h1>

            <Form changeCardLimits={props.changeCardLimits} />
         </section>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   return {
      singleCard: state.cards.data[ownProps.match.params.cardId - 1]
   }
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      changeCardLimits: (newWithdrawalLimit, newOnlineLimit) =>
         dispatch(changeCardLimits(parseInt(ownProps.match.params.cardId, 10), newWithdrawalLimit, newOnlineLimit))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LimitsChange);