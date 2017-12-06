import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardsListEl = ({ matchUrl, id, type, expires_month, expires_year, balance }) => {
   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{id}. {type} card</h4>
         <p className="list-group-item-text">
            Expires: {expires_month}/{expires_year}, balance: {balance}
         </p>
      </Link>
   );
};

CardsListEl.propTypes = {
   id: PropTypes.number,
   type: PropTypes.string,
   expires_month: PropTypes.string,
   expires_year: PropTypes.string,
   balance: PropTypes.number
}

export default CardsListEl;