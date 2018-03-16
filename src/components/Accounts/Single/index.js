import React from 'react';
import { connect } from 'react-redux';
import { chunker } from 'components/Common/Tools';

const SingleAccount = ({ singleAcc }) => {
   return (
      <section className="single-account module">
         <h1>{singleAcc.type} account</h1>
         <ul>
            <li>Sortcode: {chunker(singleAcc.sortcode, 2, '-')}</li>
            <li>Number: {singleAcc.number}</li>
            <li>Currency: {singleAcc.currency}</li>
            <li>Balance: {singleAcc.balance} {singleAcc.currency}</li>
         </ul>
      </section>
   );
};

const mapStateToProps = (state, ownProps) => {
   const accId = parseInt(ownProps.match.params.accId, 10);

   return {
      singleAcc: state.accounts.data.find(el => el.id === accId)
   }
};

export default connect(mapStateToProps)(SingleAccount);