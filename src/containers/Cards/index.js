import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCards } from 'actions/cards';
import Loader from 'components/UI/Loader';

import CardsList from 'components/Cards/List';
import SingleCard from 'components/Cards/Single';
import PINChange from 'components/Cards/PINChange';
import LimitsChange from 'components/Cards/LimitsChange';

class Cards extends Component {
   componentWillMount() {
      if (!this.props.fetchCardsStatus) {
         this.props.fetchCards();
      }
   }

   render() {
      if (!this.props.fetchCardsStatus) {
         return <Loader />;
      } else {
         return (
            <div className="row panel-content">
               <div className="col-xs-12">
                  <Switch>
                     <Route exact path={this.props.match.url} component={CardsList} />
                     <Route exact path={`${this.props.match.url}/:cardId`} component={SingleCard} />
                     <Route
                        path={`${this.props.match.url}/:cardId/change-pin`}
                        component={PINChange}
                     />
                     <Route
                        path={`${this.props.match.url}/:cardId/change-limits`}
                        component={LimitsChange}
                     />
                  </Switch>
               </div>
            </div>
         );
      }
   }
}

const mapStateToProps = state => {
   return {
      fetchCardsStatus: state.cards.status
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchCards: () => dispatch(fetchCards())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
