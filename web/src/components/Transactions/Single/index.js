import React from 'react';
import { connect } from 'react-redux';
import { formatFirebaseDate } from 'tools';

const SingleTransaction = ({ singleTrans: { type, date, payee_name, amount, status } }) => {
   date = formatFirebaseDate(date, 'DD/MM/YYYY HH:mm');

   return (
      <section className="single-transfer module">
         <h1>{type}</h1>
         <ul>
            <li>Date: {date}</li>
            <li>Payee: {payee_name}</li>
            <li>Amount: {amount}</li>
            <li>Type: {type}</li>
            <li>Status: {status}</li>
         </ul>
      </section>
   );
};

const mapStateToProps = (state, ownProps) => {
   const transId = ownProps.match.params.transId;
   let tempFoundTrans;
   let foundTrans;

   // Find the transaction among the pages (remember about pagination!)
   for (const pageTransactions of state.transactions.data) {
      tempFoundTrans = pageTransactions.find(trans => trans.id === transId);

      if (tempFoundTrans) {
         foundTrans = tempFoundTrans;
         break;
      }
   }

   return {
      singleTrans: foundTrans
   };
};

export default connect(mapStateToProps)(SingleTransaction);
