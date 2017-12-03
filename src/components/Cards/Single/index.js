import React, { Component } from 'react';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';
import CardInfobox from 'components/Infobox/CardInfobox/index';

class SingleCard extends Component {
   constructor() {
      super();

      this.state = { singleCard: [], loaded: false };
   }

   render() {
      return (
         <div className="row">
            <AsyncLoader loaded={this.state.loaded}>
               <div className="col-xs-12">
                  <CardInfobox {...this.state.singleCard} currentUrl={this.props.match.url} />
               </div>
            </AsyncLoader>
         </div>
      );
   }

   componentDidMount() {
      axios.get(`http://localhost:3001/cards/${this.props.match.params.cardId}`)
      .then(res => res.data)
      .then(singleCard => this.setState({ singleCard, loaded: true }))
      .catch(() => this.setState({ loaded: 0 }));
   }
}

export default SingleCard;