import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CardInfobox from '../../Infobox/CardInfobox/index';

class SingleCard extends Component {
   constructor(props) {
      super(props);

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
      fetch(`http://localhost:3001/cards/${this.props.match.params.cardId}`)
      .then(res => res.json())
      .then(singleCard => {
         this.setState({ singleCard });
      });
   }
}

export default SingleCard;