import React from 'react';
import { useAppSelector } from '@hooks';

import CardInfobox from 'components/Infobox/CardInfobox';

import { RouteComponentProps } from 'react-router-dom';

interface Params {
   cardId: string;
}

interface Props extends RouteComponentProps<Params> {}

const SingleCard: React.FC<Props> = (props) => {
   const { match } = props;

   const cardId = props.match.params.cardId;
   const singleCard = useAppSelector((state) => state.cards.data.find((el) => el._id === cardId));

   return (
      <div className="row">
         <div className="col">
            <CardInfobox {...singleCard} currentUrl={match.url} />
         </div>
      </div>
   );
};

export default SingleCard;
