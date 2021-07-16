import React from 'react';
import { Link } from 'react-router-dom';
import { chunker } from 'tools';

type Props = {
   matchUrl: string;
   _id: string;
   type: string;
   sortcode: number;
   currency: string;
   balance: number;
};

const AccountsListEl: React.FC<Props> = (props) => {
   const { matchUrl, _id, type, sortcode, currency, balance } = props;

   return (
      <Link to={`${matchUrl}/${_id}`} className="list-group-item list-group-item-action">
         <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{type} account</h5>
            <small className="text-muted">Active</small>
         </div>
         <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
            blandit.
         </p>
         <small className="text-muted">
            Sortcode: {chunker(sortcode, 2, '-')}, currency: {currency}, balance: {balance}{' '}
            {currency}
         </small>
      </Link>
   );
};

export default AccountsListEl;
