import React from 'react';
import { useAppSelector, useAppDispatch } from '@hooks';

import * as actions from 'actions';
import Form from './Form';

type Props = {};

const NewTransfer: React.FC<Props> = (props) => {
   const dispatch = useAppDispatch();

   const accounts = useAppSelector((state) => state.accounts.data);
   const userId = useAppSelector((state) => state.profile.data._id);

   const addTransfer = (data: any) => dispatch(actions.addTransfer(data));

   const firstAccId = accounts[0]._id;
   const userAccountsList = accounts.map((acc) => (
      <option key={acc._id} value={acc._id}>
         {`${acc.type}, ${acc.sortcode}, ${acc.balance} ${acc.currency}`}
      </option>
   ));

   return (
      <div className="row">
         <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
            <section className="module new-transfer">
               <h1>New transfer</h1>

               <Form
                  userId={userId}
                  userAccountsList={userAccountsList}
                  firstAccId={firstAccId}
                  addTransfer={addTransfer}
               />
            </section>
         </div>
      </div>
   );
};

export default NewTransfer;
