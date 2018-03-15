import React from 'react';
import { connect } from 'react-redux';

const SingleAccount = (props) => {
   return (
      <section className="single-account module">
         <h1>{props.singleAcc.type}</h1>
         <ul>
            <li>Sortcode: {props.singleAcc.sortcode}</li>
            <li>Number: {props.singleAcc.number}</li>
            <li>Currency: {props.singleAcc.currency}</li>
            <li>Balance: {props.singleAcc.balance} {props.singleAcc.currency}</li>
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