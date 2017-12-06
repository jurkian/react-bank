import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AccountsListElement = ({ matchUrl, id, type, sortcode, currency, balance }) => {
   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{id}. {type}</h4>
         <p className="list-group-item-text">
            Sortcode: {sortcode}, currency: {currency}, balance: {balance} {currency}
         </p>
      </Link>
   );
};

AccountsListElement.propTypes = {
   id: PropTypes.number,
   type: PropTypes.string,
   sortcode: PropTypes.string,
   currency: PropTypes.string,
   balance: PropTypes.number
}

export default AccountsListElement;