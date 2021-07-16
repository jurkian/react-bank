import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useAppSelector } from '@hooks';

import AccountsListEl from '../ListElement';

interface Props extends RouteComponentProps {}

const AccountsList: React.FC<Props> = (props) => {
   const { match } = props;
   const accounts = useAppSelector((state) => state.accounts.data);

   // Prepare accounts list
   const accountsList = accounts.map((acc) => (
      <AccountsListEl key={acc._id} {...acc} matchUrl={match.url} />
   ));

   return (
      <>
         <h1>Accounts</h1>

         <p>You have {accountsList.length} accounts</p>
         <div className="list-group">{accountsList}</div>
      </>
   );
};

export default AccountsList;
