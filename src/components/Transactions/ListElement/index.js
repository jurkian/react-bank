import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

const TransactionsListEl = ({
   matchUrl,
   id,
   type,
   payee_name,
   date,
   amount,
   status,
   reference
}) => {
   date = format(date, 'DD/MM/YYYY HH:mm');

   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item">
         <h4 className="list-group-item-heading">
            {id}. {type}
         </h4>
         <p className="list-group-item-text">
            Payee: {payee_name}, date: {date}, amount: {amount}, status: {status}, ref: {reference}
         </p>
      </Link>
   );
};

TransactionsListEl.propTypes = {
   matchUrl: PropTypes.string,
   id: PropTypes.number,
   type: PropTypes.string,
   payee_name: PropTypes.string,
   date: PropTypes.instanceOf(Date),
   amount: PropTypes.number,
   status: PropTypes.string
};

export default TransactionsListEl;
