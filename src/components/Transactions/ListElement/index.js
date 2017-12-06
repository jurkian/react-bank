import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TransactionsListEl = ({ matchUrl, id, type, payee, date, amount, status }) => {
   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{id}. {type}</h4>
         <p className="list-group-item-text">
            Payee: {payee}, date: {date}, amount: {amount}, status: {status}
         </p>
      </Link>
   );
}

TransactionsListEl.propTypes = {
   matchUrl: PropTypes.string,
   id: PropTypes.number,
   type: PropTypes.string,
   payee: PropTypes.string,
   date: PropTypes.string,
   amount: PropTypes.number,
   status: PropTypes.string
}

export default TransactionsListEl;