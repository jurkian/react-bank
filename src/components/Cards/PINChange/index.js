import React, { Component } from 'react';
import Formsy from 'formsy-react';
import FormsyInput from 'components/FormsyFields/input';
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

         const newPinValidations = {
            validations: {
               isNumeric: true
            },
            validationErrors: {
               isNumeric: 'Please enter a number'
            }
         }
      
         const newPinConfValidations = {
            validations: {
               isNumeric: true,
               equalsField: 'newPin'
            },
            validationErrors: {
               isNumeric: 'Please enter a number',
               equalsField: `The fields don't match`
            }
         }

         return (
            <div className="col-sm-6 col-sm-offset-3">
               <h1>PIN change for {this.props.singleCard.id}. {this.props.singleCard.type} card</h1>

               <Formsy
                  onValidSubmit={this.handleFormSubmit.bind(this)}>

                  <div className="form-group">
                     <label htmlFor="new-pin">Enter new PIN</label>
                     <FormsyInput
                        name="newPin"
                        type="text"
                        id="new-pin"
                        placeholder="Enter new PIN..."
                        {...newPinValidations}
                        required />
                  </div>

                  <div className="form-group">
                     <label htmlFor="new-pin-conf">Confirm new PIN</label>
                     <FormsyInput
                        name="newPinConf"
                        type="text"
                        id="new-pin-conf"
                        placeholder="Confirm new PIN..."
                        {...newPinConfValidations} 
                        required />
                  </div>

                  <p className="validation-info">{this.props.validationInfo}</p>

                  <SingleModuleButton text="Change PIN" type="submit" />
               </Formsy>
            </div>
         );
      }
   }

   handleFormSubmit(model) {
      const cardId = this.props.singleCard.id;
      const newPin = parseInt(model.newPin, 10);

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