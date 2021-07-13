import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDate } from 'tools';

const TransfersListEl = ({ matchUrl, _id, type, payeeName, date, amount, status, reference }) => {
   date = formatDate(date, 'dd/MM/yyyy HH:mm');

   return (
      <Link to={`${matchUrl}/${_id}`} className="list-group-item list-group-item-action">
         <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{type} transfer</h5>
            <small className="text-muted">status: {status}</small>
         </div>
         <p className="mb-1">
            <b>Payee:</b> {payeeName} / <b>date:</b> {date} / <b>amount:</b> {amount}
         </p>
         <small className="text-muted">Reference: {reference}</small>
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
