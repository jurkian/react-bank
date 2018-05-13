import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { myPadStart, chunker } from 'tools';

const CardsListEl = ({ matchUrl, id, type, number, expires_month, expires_year }) => {
   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{type} card</h4>
         <p className="list-group-item-text">
            <span>Number: {chunker(number, 4, '-')} </span>
            <span>
               Expires: {myPadStart(expires_month, 2, 0)}/{expires_year}
            </span>
         </p>
      </Link>
   );
};

CardsListEl.propTypes = {
   id: PropTypes.string,
   type: PropTypes.string,
   expires_month: PropTypes.number,
   expires_year: PropTypes.number,
   balance: PropTypes.number
};

export default CardsListEl;
