import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import AccountsListElement from '../ListElement';

const AccountsList = props => {
   // Prepare accounts list
   const accounts = props.accounts.map((acc, index) => (
      <AccountsListElement key={index} {...acc} matchUrl={props.match.url} />
   ));

   return (
      <Fragment>
         <h1>Accounts</h1>
         <p>You have {props.accounts.length} accounts</p>

         <div className="list-group">{accounts}</div>
      </Fragment>
   );
};

const mapStateToProps = state => {
   return {
      accounts: state.accounts.data
   };
};

export default connect(mapStateToProps)(AccountsList);
