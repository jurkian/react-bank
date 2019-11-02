import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { chunker } from 'tools';
import Form from './Form';

const LimitsChange = props => {
   return (
      <div className="col-sm-6 col-sm-offset-3">
         <section className="limits-change module">
            <h1>Limits change</h1>
            <p>
               <strong>{props.singleCard.type} card</strong>
            </p>
            <p>Number: {chunker(props.singleCard.number, 4, '-')}</p>

            <Form
               changeCardLimits={props.changeCardLimits}
               currentOnlineLimit={props.currentOnlineLimit}
               currentWithdrawalLimit={props.currentWithdrawalLimit}
            />
         </section>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   const cardId = ownProps.match.params.cardId;
   const singleCard = state.cards.data.find(el => el.id === cardId);

   return {
      singleCard,
      currentOnlineLimit: singleCard.daily_online_limit,
      currentWithdrawalLimit: singleCard.daily_withdrawal_limit
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   const cardId = ownProps.match.params.cardId;

   return {
      changeCardLimits: (newOnlineLimit, newWithdrawalLimit) =>
         dispatch(actions.changeCardLimits(cardId, newOnlineLimit, newWithdrawalLimit))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(LimitsChange);
