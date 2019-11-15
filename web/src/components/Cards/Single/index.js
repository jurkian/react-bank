import React from 'react';
import { connect } from 'react-redux';
import CardInfobox from 'components/Infobox/CardInfobox';

const SingleCard = ({ singleCard, match }) => {
   return (
      <div className="row">
         <div className="col">
            <CardInfobox {...singleCard} currentUrl={match.url} />
         </div>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   const cardId = ownProps.match.params.cardId;

   return {
      singleCard: state.cards.data.find(el => el._id === cardId)
   };
};

export default connect(mapStateToProps)(SingleCard);
