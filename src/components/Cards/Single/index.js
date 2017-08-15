import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleCard extends Component {
   constructor(props) {
      super(props);

      this.state = { singleCard: [] };
   }

   render() {
      return (
         <div>
            <h1>{this.state.singleCard.id}. {this.state.singleCard.type} card</h1>
            <ul>
               <li>Type: {this.state.singleCard.type}</li>
               <li>Expires month: {this.state.singleCard.expires_month}</li>
               <li>Expires year: {this.state.singleCard.expires_year}</li>
               <li>Security code: {this.state.singleCard.security_code}</li>
               <li>Balance: {this.state.singleCard.balance}</li>
               <li>
                  <Link to={`${this.props.match.url}/change-pin`}><button>Change PIN</button></Link>
                  <Link to={`${this.props.match.url}/change-limits`}><button>Change limits</button></Link>
               </li>
            </ul>
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