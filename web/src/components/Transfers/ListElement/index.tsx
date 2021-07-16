import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from 'tools';

type Props = {
   matchUrl: string;
   _id: string;
   type: string;
   payeeName: string;
   date: Date;
   amount: number;
   status: string;
   reference: string;
};

const TransfersListEl: React.FC<Props> = (props) => {
   const { matchUrl, _id, type, payeeName, amount, status, reference } = props;

   const date = formatDate(props.date, 'dd/MM/yyyy HH:mm');

   return (
      <Link to={`${matchUrl}/${_id}`} className="list-group-item list-group-item-action">
         <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{type} transfer</h5>
            <small className="text-muted">status: {status}</small>
         </div>
         <p className="mb-1">
            <b>Payee:</b> {payeeName} / <b>date:</b> {date} / <b>amount:</b> {amount}
         </p>
         <small className="text-muted">Reference: {reference}</small>
      </Link>
   );
};

export default TransfersListEl;
