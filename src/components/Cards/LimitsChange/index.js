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
   const cardId = parseInt(ownProps.match.params.cardId, 10);

   return {
      singleCard: state.cards.data.find(el => el.id === cardId)
   }
};

const mapDispatchToProps = (dispatch, ownProps) => {
   const cardId = parseInt(ownProps.match.params.cardId, 10);
   
   return {
      changeCardLimits: (newWithdrawalLimit, newOnlineLimit) =>
         dispatch(changeCardLimits(cardId, newWithdrawalLimit, newOnlineLimit))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LimitsChange);