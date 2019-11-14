import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDate } from 'tools';

const TransfersListEl = ({ matchUrl, _id, type, payeeName, date, amount, status, reference }) => {
   date = formatDate(date, 'DD/MM/YYYY HH:mm');

   return (
      <Link to={`${matchUrl}/${_id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{type}</h4>
         <p className="list-group-item-text">
            <b>Payee:</b> {payeeName} / <b>date:</b> {date} / <b>amount:</b> {amount} /{' '}
            <b>status:</b> {status} / <b>ref:</b> {reference}
         </p>
      </Link>
   );
};

TransfersListEl.propTypes = {
   matchUrl: PropTypes.string,
   _id: PropTypes.string,
   type: PropTypes.string,
   payeeName: PropTypes.string,
   date: PropTypes.string,
   amount: PropTypes.number,
   status: PropTypes.string
};

export default TransfersListEl;
