import React from 'react';
import { connect } from 'react-redux';
import { changeCardPin } from 'actions/cards';
import Form from './Form';

const PINChange = (props) => {
   return (
      <div className="col-sm-6 col-sm-offset-3">
         <section className="pin-change module">
            <h1>PIN change for {props.singleCard.id}. {props.singleCard.type} card</h1>

            <Form changeCardPin={props.changeCardPin} />
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
      changeCardPin: pin => dispatch(changeCardPin(parseInt(ownProps.match.params.cardId, 10), pin))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(PINChange);