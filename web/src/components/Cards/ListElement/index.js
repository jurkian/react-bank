import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { myPadStart, chunker } from 'tools';

const CardsListEl = ({ matchUrl, _id, type, number, expiresMonth, expiresYear }) => {
   return (
      <Link to={`${matchUrl}/${_id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{type} card</h4>
         <p className="list-group-item-text">
            <span>Number: {chunker(number, 4, '-')} </span>
            <span>
               Expires: {myPadStart(expiresMonth, 2, 0)}/{expiresYear}
            </span>
         </p>
      </Link>
   );
};

CardsListEl.propTypes = {
   _id: PropTypes.string,
   type: PropTypes.string,
   expiresMonth: PropTypes.number,
   expiresYear: PropTypes.number,
   balance: PropTypes.number
};

export default CardsListEl;
