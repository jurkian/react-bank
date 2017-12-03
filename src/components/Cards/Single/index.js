import React, { Component } from 'react';
import axios from 'axios';

import CardInfobox from 'components/Infobox/CardInfobox/index';

class SingleCard extends Component {
   constructor() {
      super();

      this.state = { singleCard: [] };
   }

   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <CardInfobox {...this.state.singleCard} currentUrl={this.props.match.url} />
            </div>
         </div>
      );
   }

   componentDidMount() {
      axios.get(`http://localhost:3001/cards/${this.props.match.params.cardId}`)
      .then(res => res.data)
      .then(singleCard => {
         this.setState({ singleCard });
      });
   }
}

export default SingleCard;