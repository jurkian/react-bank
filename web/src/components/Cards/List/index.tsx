import React from 'react';
import { useAppSelector } from '@hooks';

import CardsListEl from '../ListElement';

import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

type CardType = {
   _id: string;
};

const CardsList: React.FC<Props> = (props) => {
   const { match } = props;
   const cards = useAppSelector((state) => state.cards.data);

   const cardsList = cards.map((card: CardType) => (
      <CardsListEl key={card._id} {...card} matchUrl={match.url} />
   ));

   return (
      <>
         <h1>Cards</h1>

         <p>You have {cardsList.length} active cards</p>
         <div className="list-group">{cardsList}</div>
      </>
   );
};

export default CardsList;
