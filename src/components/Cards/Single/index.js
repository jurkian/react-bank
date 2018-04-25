import React from 'react';
import { connect } from 'react-redux';
import CardInfobox from 'components/Infobox/CardInfobox';

const SingleCard = ({ singleCard, match }) => {
   return (
      <div className="row">
         <div className="col-xs-12">
            <CardInfobox {...singleCard} currentUrl={match.url} />
         </div>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   const cardId = parseInt(ownProps.match.params.cardId, 10);

   return {
      singleCard: state.cards.data.find(el => el.id === cardId)
   };
};

export default connect(mapStateToProps)(SingleCard);
