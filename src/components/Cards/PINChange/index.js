import React from 'react';
import { connect } from 'react-redux';
import { changeCardPin } from 'actions/cards';
import Form from './Form';

const PINChange = props => {
   return (
      <div className="col-sm-6 col-sm-offset-3">
         <section className="pin-change module">
            <h1>
               PIN change for {props.singleCard.id}. {props.singleCard.type} card
            </h1>

            <Form changeCardPin={props.changeCardPin} />
         </section>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   const cardId = parseInt(ownProps.match.params.cardId, 10);

   return {
      singleCard: state.cards.data.find(el => el.id === cardId)
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   const cardId = parseInt(ownProps.match.params.cardId, 10);

   return {
      changeCardPin: pin => dispatch(changeCardPin(cardId, pin))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(PINChange);
