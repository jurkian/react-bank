import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import AccountsListEl from '../ListElement';

const AccountsList = ({ accounts, match }) => {
   // Prepare accounts list
   const accountsList = Object.entries(accounts).map(([key, value]) => (
      <AccountsListEl key={key} {...value} matchUrl={match.url} />
   ));

   return (
      <Fragment>
         <h1>Accounts</h1>
         <p>You have {accountsList.length} accounts</p>

         <div className="list-group">{accountsList}</div>
      </Fragment>
   );
};

const mapStateToProps = state => {
   return {
      accounts: state.accounts.data
   };
};

export default connect(mapStateToProps)(AccountsList);
