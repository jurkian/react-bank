import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

class MessagesListEl extends Component {
   render() {
      const { matchUrl, id, title, date, isToggled } = this.props;
      const classes = classNames({
         'disabled': isToggled
      });

      return (
         <Link to={`${matchUrl}/${id}`} className={`list-group-item messages-list-item ${classes}`}>
            <div>
               <h4 className="list-group-item-heading">{id}. {title}</h4>
               <p className="list-group-item-text">
                  date: {date}
               </p>
            </div>
            <aside>
               <div className="checkbox-container" onClick={this.onCheckboxClick}>
                  <input
                     type="checkbox"
                     checked={isToggled}
                     onChange={(e) => e.stopPropagation()}
                  />
               </div>
               <button
                  className="btn btn-danger btn-sm"
                  onClick={this.onButtonClick}>Remove</button>
            </aside>
         </Link>
      );
   }

   onCheckboxClick = e => {
      e.preventDefault();
      this.props.onToggle(this.props.id, !this.props.isToggled);
   }

   onButtonClick = e => {
      e.preventDefault();
      this.props.onRemove(this.props.id);
   }
}

MessagesListEl.propTypes = {
   matchUrl: PropTypes.string,
   id: PropTypes.number,
   title: PropTypes.string,
   date: PropTypes.string
}

export default MessagesListEl;