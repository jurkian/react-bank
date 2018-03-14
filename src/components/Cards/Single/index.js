import React from 'react';
import { connect } from 'react-redux';
import CardInfobox from 'components/Infobox/CardInfobox';

const SingleCard = (props) => {
   return (
      <div className="row">
         <div className="col-xs-12">
            <CardInfobox {...props.singleCard} currentUrl={props.match.url} />
         </div>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   return {
      singleCard: state.cards.data[ownProps.match.params.cardId - 1]
   }
};

export default connect(mapStateToProps)(SingleCard);