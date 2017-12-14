import React, { Component } from 'react';
import Formsy from 'formsy-react';
import FormsyInput from 'components/FormsyFields/input';
import { connect } from 'react-redux';
import { fetchCards, changeCardLimits } from 'actions/cards';
import AsyncLoader from 'components/AsyncLoader';
import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

class LimitsChange extends Component {
   componentWillMount() {
      this.props.fetchCards();
   }

   render() {
      if (!this.props.fetchCardsStatus) {
         return <AsyncLoader loaded={this.props.fetchCardsStatus} />;

      } else {
         
         const dwlValidations = {
            validations: {
               isNumeric: true
            },
            validationErrors: {
               isNumeric: 'Please enter a number'
            }
         }
      
         const dolValidations = {
            validations: {
               isNumeric: true
            },
            validationErrors: {
               isNumeric: 'Please enter a number'
            }
         }

         return (
            <div className="col-sm-6 col-sm-offset-3">
               <h1>Limits change for {this.props.singleCard.id}. {this.props.singleCard.type} card</h1>

               <Formsy
                  onValidSubmit={this.handleFormSubmit.bind(this)}>

                  <div className="form-group">
                     <label htmlFor="daily-withdrawal-limit">Enter new daily withdrawal limit</label>

                     <FormsyInput
                        name="dailyWithdrawalLimit"
                        type="text"
                        id="daily-withdrawal-limit"
                        placeholder="New daily withdrawal limit..."
                        {...dwlValidations}
                        required />
                  </div>

                  <div className="form-group">
                     <label htmlFor="daily-online-limit">Enter new daily online limit</label>

                     <FormsyInput
                        name="dailyOnlineLimit"
                        type="text"
                        id="daily-online-limit"
                        placeholder="New daily online limit..."
                        {...dolValidations}
                        required />
                  </div>

                  <p className="validation-info">{this.props.validationInfo}</p>

                  <SingleModuleButton text="Change limits" type="submit" />
               </Formsy>
            </div>
         );
      }
   }

   handleFormSubmit(model) {
      // DWL = Daily Withdrawal Limit
      // DOL = Daily Online Limit

      const cardId = this.props.singleCard.id;
      const newDWL = parseInt(model.dailyOnlineLimit, 10);
      const newDOL = parseInt(model.dailyWithdrawalLimit, 10);

      this.props.changeCardLimits(cardId, newDWL, newDOL);
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      singleCard: state.cards.data[ownProps.match.params.cardId - 1],
      fetchCardsStatus: state.cards.status,
      validationInfo: state.cards.validations.changeLimits
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      changeCardLimits: (id, newDWL, newDOL) => dispatch(changeCardLimits(id, newDWL, newDOL)),
      fetchCards: () => dispatch(fetchCards())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LimitsChange);