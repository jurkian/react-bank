import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from 'actions/cards';
import AsyncLoader from 'components/AsyncLoader';
import CardInfobox from 'components/Infobox/CardInfobox/index';

class SingleCard extends Component {
   componentWillMount() {
      this.props.fetchCards();
   }

   render() {
      if (!this.props.fetchCardsStatus) {
         return <AsyncLoader loaded={this.props.fetchCardsStatus} />;

      } else {
         return <div className="row">
            <div className="col-xs-12">
               <CardInfobox {...this.props.singleCard} currentUrl={this.props.match.url} />
            </div>
         </div>
      }
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      singleCard: state.cards.data[ownProps.match.params.cardId - 1],
      fetchCardsStatus: state.cards.status
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchCards: () => dispatch(fetchCards())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SingleCard);