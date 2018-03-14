import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCards } from 'actions/cards';
import AsyncLoader from 'components/AsyncLoader';

import CardsList from './List';
import SingleCard from './Single';
import PINChange from './PINChange';
import LimitsChange from './LimitsChange';

class Cards extends Component {
   componentWillMount() {
      if (!this.props.fetchCardsStatus) {
         this.props.fetchCards();
      }
   }

   render() {
      if (!this.props.fetchCardsStatus) {
         return <AsyncLoader loaded={this.props.fetchCardsStatus} />;

      } else {
         return (
            <div className="row panel-content">
               <div className="col-xs-12">
                  <Route exact path={this.props.match.url} component={CardsList} />
                  <Route exact path={`${this.props.match.url}/:cardId`} component={SingleCard} />
                  <Route exact path={`${this.props.match.url}/:cardId/change-pin`} component={PINChange} />
                  <Route exact path={`${this.props.match.url}/:cardId/change-limits`} component={LimitsChange} />
               </div>
            </div>
         );
      }
   }
}

const mapStateToProps = (state) => {
   return {
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
)(Cards);