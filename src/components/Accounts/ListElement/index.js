import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { chunker } from 'tools';

const AccountsListEl = ({ matchUrl, id, type, sortcode, currency, balance }) => {
   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{type} account</h4>
         <p className="list-group-item-text">
            Sortcode: {chunker(sortcode, 2, '-')}, currency: {currency}, balance: {balance}
            {currency}
         </p>
      </Link>
   );
};

AccountsListEl.propTypes = {
   id: PropTypes.string,
   type: PropTypes.string,
   sortcode: PropTypes.number,
   currency: PropTypes.string,
   balance: PropTypes.number
};

export default AccountsListEl;
