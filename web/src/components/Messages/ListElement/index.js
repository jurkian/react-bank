import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formatDate } from 'tools';

import './style.scss';

class MessagesListEl extends Component {
   render() {
      const { matchUrl, _id, title, isRead } = this.props;
      const classes = classNames({
         disabled: isRead
      });
      let date = formatDate(this.props.sentDate, 'dd/MM/yyyy HH:mm');

      return (
         <Link
            to={`${matchUrl}/${_id}`}
            className={`list-group-item messages-list-item ${classes}`}
         >
            <div>
               <h4 className="list-group-item-heading">{title}</h4>
               <p className="list-group-item-text">date: {date}</p>
            </div>
            <aside>
               <div className="checkbox-container" onClick={this.onCheckboxClick}>
                  <input type="checkbox" checked={isRead} onChange={e => e.stopPropagation()} />
               </div>
               <button className="btn btn-danger btn-sm" onClick={this.onButtonClick}>
                  Remove
               </button>
            </aside>
         </Link>
      );
   }

   onCheckboxClick = e => {
      e.preventDefault();
      this.props.onToggle(this.props._id);
   };

   onButtonClick = e => {
      e.preventDefault();
      this.props.onRemove(this.props._id);
   };
}

MessagesListEl.propTypes = {
   matchUrl: PropTypes.string,
   _id: PropTypes.string,
   title: PropTypes.string,
   date: PropTypes.object
};

export default MessagesListEl;
