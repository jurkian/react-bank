import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useAppSelector } from '@hooks';
import { chunker } from 'tools';

interface Params {
   accId: string;
}

interface Props extends RouteComponentProps<Params> {}

const SingleAccount: React.FC<Props> = (props) => {
   const accId = props.match.params.accId;
   const singleAcc = useAppSelector((state) => state.accounts.data.find((el) => el._id === accId));

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

export default SingleAccount;
