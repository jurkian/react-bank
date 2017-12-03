import React, { Component } from 'react';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';

class SingleAccount extends Component {
   constructor() {
      super();

      this.state = { singleAcc: [], loaded: false };
   }

   render() {
      return (
         <div className="well">
            <AsyncLoader loaded={this.state.loaded}>
               <h1>{this.state.singleAcc.type}</h1>
               <ul>
                  <li>Sortcode: {this.state.singleAcc.sortcode}</li>
                  <li>Number: {this.state.singleAcc.number}</li>
                  <li>Currency: {this.state.singleAcc.currency}</li>
                  <li>Balance: {this.state.singleAcc.balance} {this.state.singleAcc.currency}</li>
               </ul>
            </AsyncLoader>
         </div>
      );
   }

   componentDidMount() {
      axios.get(`http://localhost:3001/accounts/${this.props.match.params.accId}`)
      .then(res => res.data)
      .then(singleAcc => this.setState({ singleAcc, loaded: true }))
      .catch(() => this.setState({ loaded: 0 }));
   }
}

export default SingleAccount;