import React from 'react';
import { useAppSelector, useAppDispatch } from '@hooks';

import * as actions from 'actions';
import { chunker } from 'tools';
import Form from './Form';

import { RouteComponentProps } from 'react-router-dom';

interface Params {
   cardId: string;
}

interface Props extends RouteComponentProps<Params> {}

const LimitsChange: React.FC<Props> = (props) => {
   const dispatch = useAppDispatch();

   const cardId = props.match.params.cardId;

   const singleCard = useAppSelector((state) => state.cards.data.find((el) => el._id === cardId));
   const currentOnlineLimit = singleCard.dailyOnlineLimit;
   const currentWithdrawalLimit = singleCard.dailyWithdrawalLimit;

   const changeCardLimits = (newOnlineLimit: string, newWithdrawalLimit: string) =>
      dispatch(actions.changeCardLimits(cardId, newOnlineLimit, newWithdrawalLimit));

   return (
      <div className="col-sm-6 offset-sm-3">
         <section className="module limits-change">
            <h1>Limits change</h1>
            <p>
               <strong>{singleCard.type} card</strong>
            </p>
            <p>Number: {chunker(singleCard.number, 4, '-')}</p>

            <Form
               changeCardLimits={changeCardLimits}
               currentOnlineLimit={currentOnlineLimit}
               currentWithdrawalLimit={currentWithdrawalLimit}
            />
         </section>
      </div>
   );
};

export default LimitsChange;
