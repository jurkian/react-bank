import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MessagesListEl = ({ matchUrl, id, title, date }) => {
   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{id}. {title}</h4>
         <p className="list-group-item-text">
            date: {date}
         </p>
      </Link>
   );
}

MessagesListEl.propTypes = {
   matchUrl: PropTypes.string,
   id: PropTypes.number,
   title: PropTypes.string,
   date: PropTypes.string
}

export default MessagesListEl;