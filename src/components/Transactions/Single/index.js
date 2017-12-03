import React, { Component } from 'react';
import axios from 'axios';

class SingleTransaction extends Component {
   constructor() {
      super();

      this.state = { singleTrans: [] };
   }

   render() {
      return (
         <div className="well">
            <h1>{this.state.singleTrans.id}. {this.state.singleTrans.type}</h1>
            <ul>
               <li>Date: {this.state.singleTrans.date}</li>
               <li>Payee: {this.state.singleTrans.payee}</li>
               <li>Amount: {this.state.singleTrans.amount}</li>
               <li>Type: {this.state.singleTrans.type}</li>
               <li>Status: {this.state.singleTrans.status}</li>
            </ul>
         </div>
      );
   }

   componentDidMount() {
      axios.get(`http://localhost:3001/transactions/${this.props.match.params.transId}`)
      .then(res => res.data)
      .then(singleTrans => {
         this.setState({ singleTrans });
      });
   }
}

export default SingleTransaction;