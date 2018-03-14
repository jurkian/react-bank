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
   return {
      singleAcc: state.accounts.data[ownProps.match.params.accId - 1]
   }
};

export default connect(mapStateToProps)(SingleAccount);