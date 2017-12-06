import React, { Component } from 'react';
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
         return (
            <div className="col-sm-6 col-sm-offset-3">
               <h1>Limits change for {this.props.singleCard.id}. {this.props.singleCard.type} card</h1>

               <form onSubmit={this.handleFormSubmit.bind(this)}>
                  <div className="form-group">
                     <label htmlFor="daily-withdrawal-limit">Enter new daily withdrawal limit</label>
                     <input type="text" id="daily-withdrawal-limit" name="daily-withdrawal-limit" className="form-control" placeholder="New daily withdrawal limit..." ref="newDWL" />
                  </div>

                  <div className="form-group">
                     <label htmlFor="daily-online-limit">Enter new daily online limit</label>
                     <input type="text" id="daily-online-limit" name="daily-online-limit" className="form-control" placeholder="New daily online limit..." ref="newDOL" />
                  </div>

                  <p className="validation-info">{this.props.validationInfo}</p>

                  <SingleModuleButton text="Change limits" type="submit" />
               </form>
            </div>
         );
      }
   }

   handleFormSubmit(e) {
      e.preventDefault();

      // DWL = Daily Withdrawal Limit
      // DOL = Daily Online Limit

      const cardId = this.props.singleCard.id;
      const newDWL = parseInt(this.refs.newDWL.value, 10);
      const newDOL = parseInt(this.refs.newDOL.value, 10);

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