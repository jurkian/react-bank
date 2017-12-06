import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, changeCardPin } from 'actions/cards';
import AsyncLoader from 'components/AsyncLoader';
import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

class PINChange extends Component {
   componentWillMount() {
      this.props.fetchCards();
   }

   render() {
      if (!this.props.fetchCardsStatus) {
         return <AsyncLoader loaded={this.props.fetchCardsStatus} />;

      } else {
         return (
            <div className="col-sm-6 col-sm-offset-3">
               <h1>PIN change for {this.props.singleCard.id}. {this.props.singleCard.type} card</h1>

               <form onSubmit={this.handleFormSubmit.bind(this)}>
                  <div className="form-group">
                     <label htmlFor="new-pin">Enter new PIN</label>
                     <input type="text" id="new-pin" name="new-pin" className="form-control" placeholder="Enter new PIN..." ref="newPin" required />
                  </div>

                  <div className="form-group">
                     <label htmlFor="new-pin-conf">Confirm new PIN</label>
                     <input type="text" id="new-pin-conf" name="new-pin-conf" className="form-control" placeholder="Confirm new PIN..." required />
                  </div>

                  <p className="validation-info">{this.props.validationInfo}</p>

                  <SingleModuleButton text="Change PIN" type="submit" />
               </form>
            </div>
         );
      }
   }

   handleFormSubmit(e) {
      e.preventDefault();

      const cardId = this.props.singleCard.id;
      const newPin = parseInt(this.refs.newPin.value, 10);

      this.props.changeCardPin(cardId, newPin);
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      singleCard: state.cards.data[ownProps.match.params.cardId - 1],
      fetchCardsStatus: state.cards.status,
      validationInfo: state.cards.validations.changePin
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      changeCardPin: (id, newPin) => dispatch(changeCardPin(id, newPin)),
      fetchCards: () => dispatch(fetchCards())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(PINChange);