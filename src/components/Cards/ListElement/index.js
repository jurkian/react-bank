import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { myPadStart } from 'components/Utilities/Tools';

const CardsListEl = ({ matchUrl, id, type, expires_month, expires_year, balance }) => {
   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{id}. {type} card</h4>
         <p className="list-group-item-text">
            Expires: {myPadStart(expires_month, 2, 0)}/{expires_year}, balance: {balance}
         </p>
      </Link>
   );
};

CardsListEl.propTypes = {
   id: PropTypes.number,
   type: PropTypes.string,
   expires_month: PropTypes.number,
   expires_year: PropTypes.number,
   balance: PropTypes.number
}

export default CardsListEl;