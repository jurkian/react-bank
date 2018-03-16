import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { chunker } from 'components/Common/Tools';

const AccountsListEl = ({ matchUrl, id, type, sortcode, currency, balance }) => {
   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{id}. {type} account</h4>
         <p className="list-group-item-text">
            Sortcode: {chunker(sortcode, 2, '-')}, currency: {currency}, balance: {balance} {currency}
         </p>
      </Link>
   );
};

AccountsListEl.propTypes = {
   id: PropTypes.number,
   type: PropTypes.string,
   sortcode: PropTypes.number,
   currency: PropTypes.string,
   balance: PropTypes.number
}

export default AccountsListEl;