import React from 'react';
import { connect } from 'react-redux';

const SingleTransaction = ({ singleTrans }) => {
   return (
      <section className="single-transfer module">
         <h1>{singleTrans.id}. {singleTrans.type}</h1>
         <ul>
            <li>Date: {singleTrans.date}</li>
            <li>Payee: {singleTrans.payeeName}</li>
            <li>Amount: {singleTrans.amount}</li>
            <li>Type: {singleTrans.type}</li>
            <li>Status: {singleTrans.status}</li>
         </ul>
      </section>
   );
};

const mapStateToProps = (state, ownProps) => {
   const transId = parseInt(ownProps.match.params.transId, 10);
   let tempFoundTrans;
   let foundTrans;

   // Find the transaction
   state.transactions.data.forEach(pageTransactions => {
      tempFoundTrans = pageTransactions.find(trans => trans.id === transId);

      if (tempFoundTrans) {
         foundTrans = tempFoundTrans;
         return;
      }
   })

   return {
      singleTrans: foundTrans
   }
};

export default connect(mapStateToProps)(SingleTransaction);