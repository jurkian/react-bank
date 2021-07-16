import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useAppSelector } from '@hooks';

import { formatDate } from 'tools';

interface Params {
   transId: string;
}

interface Props extends RouteComponentProps<Params> {}

const SingleTransfer: React.FC<Props> = (props) => {
   const transId = props.match.params.transId;
   const singleTrans = useAppSelector((state) =>
      state.transfers.data.find((el) => el._id === transId)
   );

   const { type, payeeName, amount, status } = singleTrans;
   const date = formatDate(singleTrans.date, 'dd/MM/yyyy HH:mm');

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

export default SingleTransfer;
