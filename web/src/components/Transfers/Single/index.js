import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from 'tools';

const SingleTransfer = ({ singleTrans: { type, date, payeeName, amount, status } }) => {
   date = formatDate(date, 'DD/MM/YYYY HH:mm');

   return (
      <section className="single-transfer module">
         <h1>{type}</h1>
         <ul>
            <li>Date: {date}</li>
            <li>Payee: {payeeName}</li>
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
   for (const pageTransfers of state.transfers.data) {
      tempFoundTrans = pageTransfers.find(trans => trans.id === transId);

      if (tempFoundTrans) {
         foundTrans = tempFoundTrans;
         break;
      }
   }

   return {
      singleTrans: foundTrans
   };
};

export default connect(mapStateToProps)(SingleTransfer);
