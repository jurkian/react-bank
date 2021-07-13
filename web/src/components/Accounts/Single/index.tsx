import React from 'react';
import { connect } from 'react-redux';
import { chunker } from 'tools';

const SingleAccount = ({ singleAcc }) => {
   return (
      <section className="module single-account">
         <h1>{singleAcc.type} account</h1>
         <ul>
            <li>Sortcode: {chunker(singleAcc.sortcode, 2, '-')}</li>
            <li>Number: {singleAcc.number}</li>
            <li>Currency: {singleAcc.currency}</li>
            <li>
               Balance: {singleAcc.balance} {singleAcc.currency}
            </li>
         </ul>
      </section>
   );
};

const mapStateToProps = (state, ownProps) => {
   const accId = ownProps.match.params.accId;

   return {
      singleAcc: state.accounts.data.find(el => el._id === accId)
   };
};

export default connect(mapStateToProps)(SingleAccount);
