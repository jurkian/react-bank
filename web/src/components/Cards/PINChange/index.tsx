import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { chunker } from 'tools';
import Form from './Form';

const PINChange = props => {
   return (
      <div className="col-sm-6 offset-sm-3">
         <section className="module pin-change">
            <h1>PIN change</h1>
            <p>
               <strong>{props.singleCard.type} card</strong>
            </p>
            <p>Number: {chunker(props.singleCard.number, 4, '-')}</p>

            <Form changeCardPin={props.changeCardPin} />
         </section>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   const cardId = ownProps.match.params.cardId;

   return {
      singleCard: state.cards.data.find(el => el._id === cardId)
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   const cardId = ownProps.match.params.cardId;

   return {
      changeCardPin: pin => dispatch(actions.changeCardPin(cardId, { pin }))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(PINChange);
