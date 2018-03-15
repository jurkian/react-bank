import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

class MessagesListEl extends Component {
   render() {
      const { matchUrl, id, title, date, isToggled } = this.props;

      return (
         <Link to={`${matchUrl}/${id}`} className="list-group-item messages-list-item">
         <div>
            <h4 className="list-group-item-heading">{id}. {title}</h4>
            <p className="list-group-item-text">
               date: {date}
            </p>
         </div>
         <aside onClick={this.onAsideClick.bind(this)}>
            <div className="checkbox-container" onClick={this.onCheckboxClick.bind(this)}>
               <input
                  type="checkbox"
                  checked={isToggled}
                  onChange={(e) => e.stopPropagation()}
               />
            </div>
            <button
               className="btn btn-danger btn-sm"
               onClick={this.onButtonClick.bind(this)}>Remove</button>
         </aside>
      </Link>
      );
   }

   onAsideClick(e) {
      e.preventDefault();
   }

   onCheckboxClick(e) {
      this.props.onToggle(this.props.id, !this.props.isToggled);
   }

   onButtonClick(e) {
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