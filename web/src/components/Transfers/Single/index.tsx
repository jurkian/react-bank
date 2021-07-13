import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from 'tools';

const SingleTransfer = ({ singleTrans: { type, date, payeeName, amount, status } }) => {
   date = formatDate(date, 'dd/MM/yyyy HH:mm');

   return (
      <section className="module single-transfer">
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

   return {
      singleTrans: state.transfers.data.find(el => el._id === transId)
   };
};

export default connect(mapStateToProps)(SingleTransfer);
