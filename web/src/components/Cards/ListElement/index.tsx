import React from 'react';
import { Link } from 'react-router-dom';

import { myPadStart, chunker } from 'tools';

type Props = {
   _id: string;
   type: string;
   expiresMonth: number;
   expiresYear: number;
   balance: number;

   matchUrl: string;
   number: number;
   dailyOnlineLimit: number;
   dailyWithdrawalLimit: number;
   monthlyOnlineLimit: number;
   monthlyWithdrawalLimit: number;
};

const CardsListEl: React.FC<Props> = (props) => {
   return (
      <Link
         to={`${props.matchUrl}/${props._id}`}
         className="list-group-item list-group-item-action"
      >
         <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Card</h5>
            <small className="text-muted">
               Expires: {myPadStart(props.expiresMonth, 2, '0')}/{props.expiresYear}
            </small>
         </div>
         <p className="mb-1">Number: {chunker(props.number, 4, '-')}</p>
         <small className="text-muted">
            Daily limits: {props.dailyOnlineLimit} (online), {props.dailyWithdrawalLimit}{' '}
            (withdrawal)
         </small>
         <br />
         <small className="text-muted">
            Monthly limits: {props.monthlyOnlineLimit} (online), {props.monthlyWithdrawalLimit}{' '}
            (withdrawal)
         </small>
      </Link>
   );
};

export default CardsListEl;
