import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@hooks';

import TransfersListEl from '../ListElement';

import { RouteComponentProps } from 'react-router-dom';

const refreshTransfers = (
   newVal: string,
   setSearch: React.Dispatch<React.SetStateAction<string>>
) => {
   setSearch(newVal);
};

interface Props extends RouteComponentProps {}

const TransfersList: React.FC<Props> = (props) => {
   const [search, setSearch] = useState('');
   const { match } = props;

   const searchRef = useRef<HTMLInputElement>(null);
   const transfers = useAppSelector((state) => state.transfers.data);

   // Allow filtering by payee's name or transfer reference
   const searchText = search.toLowerCase();
   const transfersList = transfers
      .filter(
         (t) =>
            t.payeeName.toLowerCase().includes(searchText) ||
            t.reference.toLowerCase().includes(searchText)
      )
      .map((t) => <TransfersListEl key={t._id} {...t} matchUrl={props.match.url} />);

   return (
      <div>
         <h1>Transfers</h1>

         <p>There are {transfers.length} transfers right now!</p>
         <p>
            <Link to={`${match.url}/new`} className="btn btn-primary">
               New transfer
            </Link>
         </p>

         <div className="form-group">
            <input
               className="form-control"
               placeholder="Search for (payee/reference)..."
               onChange={() => {
                  const val = searchRef.current?.value;

                  if (val) {
                     refreshTransfers(val, setSearch);
                  }
               }}
               ref={searchRef}
            />
         </div>

         <div className="list-group">{transfersList}</div>
      </div>
   );
};

export default TransfersList;
