import React, { Component } from 'react';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';

class SingleTransaction extends Component {
   constructor() {
      super();

      this.state = { singleTrans: [], loaded: false };
   }

   render() {
      return (
         <div className="well">
            <AsyncLoader loaded={this.state.loaded}>
               <h1>{this.state.singleTrans.id}. {this.state.singleTrans.type}</h1>
               <ul>
                  <li>Date: {this.state.singleTrans.date}</li>
                  <li>Payee: {this.state.singleTrans.payee}</li>
                  <li>Amount: {this.state.singleTrans.amount}</li>
                  <li>Type: {this.state.singleTrans.type}</li>
                  <li>Status: {this.state.singleTrans.status}</li>
               </ul>
            </AsyncLoader>
         </div>
      );
   }

   componentDidMount() {
      axios.get(`http://localhost:3001/transactions/${this.props.match.params.transId}`)
      .then(res => res.data)
      .then(singleTrans => this.setState({ singleTrans, loaded: true }))
      .catch(() => this.setState({ loaded: 0 }));
   }
}

export default SingleTransaction;