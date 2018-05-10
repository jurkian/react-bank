import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TransactionsListEl = ({ matchUrl, id, type, payeeName, date, amount, status, reference }) => {
   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item">
         <h4 className="list-group-item-heading">
            {id}. {type}
         </h4>
         <p className="list-group-item-text">
            Payee: {payeeName}, date: {date}, amount: {amount}, status: {status}, ref: {reference}
         </p>
      </Link>
   );
};

TransactionsListEl.propTypes = {
   matchUrl: PropTypes.string,
   id: PropTypes.number,
   type: PropTypes.string,
   payeeName: PropTypes.string,
   date: PropTypes.string,
   amount: PropTypes.number,
   status: PropTypes.string
};

export default TransactionsListEl;
