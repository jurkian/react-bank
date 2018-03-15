import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const MessagesListEl = ({ matchUrl, id, title, date }) => {
   return (
      <Link to={`${matchUrl}/${id}`} className="list-group-item messages-list-item">
         <div>
            <h4 className="list-group-item-heading">{id}. {title}</h4>
            <p className="list-group-item-text">
               date: {date}
            </p>
         </div>
         <aside>
            <div className="checkbox-container" onClick={handleCheckboxClick}>
               <input type="checkbox" />
            </div>
            <button className="btn btn-danger btn-sm" onClick={handleRemoveClick}>Remove</button>
         </aside>
      </Link>
   );
}

const handleCheckboxClick = (e) => {
   e.preventDefault();
}

const handleRemoveClick = (e) => {
   e.preventDefault();
}

MessagesListEl.propTypes = {
   matchUrl: PropTypes.string,
   id: PropTypes.number,
   title: PropTypes.string,
   date: PropTypes.string
}

export default MessagesListEl;