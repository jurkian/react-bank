import React from 'react';
import { connect } from 'react-redux';

const SingleTransaction = (props) => {
   return (
      <section className="single-transfer module">
         <h1>{props.singleTrans.id}. {props.singleTrans.type}</h1>
         <ul>
            <li>Date: {props.singleTrans.date}</li>
            <li>Payee: {props.singleTrans.payeeName}</li>
            <li>Amount: {props.singleTrans.amount}</li>
            <li>Type: {props.singleTrans.type}</li>
            <li>Status: {props.singleTrans.status}</li>
         </ul>
      </section>
   );
};

const mapStateToProps = (state, ownProps) => {
   return {
      singleTrans: state.transactions.data[ownProps.match.params.transId - 1]
   }
};

export default connect(mapStateToProps)(SingleTransaction);