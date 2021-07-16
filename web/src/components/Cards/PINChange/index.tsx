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

const PINChange: React.FC<Props> = (props) => {
   const dispatch = useAppDispatch();

   const cardId = props.match.params.cardId;
   const singleCard = useAppSelector((state) => state.cards.data.find((el) => el._id === cardId));

   const changeCardPin = (pin: number) => dispatch(actions.changeCardPin(cardId, pin));

   return (
      <div className="col-sm-6 offset-sm-3">
         <section className="module pin-change">
            <h1>PIN change</h1>
            <p>
               <strong>{singleCard.type} card</strong>
            </p>
            <p>Number: {chunker(singleCard.number, 4, '-')}</p>

            <Form changeCardPin={changeCardPin} />
         </section>
      </div>
   );
};

export default PINChange;
