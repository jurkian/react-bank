import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { formatDate } from 'tools';

import './style.scss';

type OnToggleType = (id: string) => void;
type OnRemoveType = (id: string) => void;

type Props = {
   matchUrl: string;
   _id: string;
   title: string;
   isRead: boolean;
   sentDate: Date;

   onToggle: OnToggleType;
   onRemove: OnRemoveType;
};

const onCheckboxClick = (e: React.MouseEvent, onToggle: OnToggleType, id: string) => {
   e.preventDefault();
   onToggle(id);
};

const onButtonClick = (e: React.MouseEvent, onRemove: OnRemoveType, id: string) => {
   e.preventDefault();
   onRemove(id);
};

const MessagesListEl: React.FC<Props> = (props) => {
   const { matchUrl, _id, title, isRead } = props;
   const classes = classNames({
      disabled: isRead,
   });
   let date = formatDate(props.sentDate, 'dd/MM/yyyy HH:mm');

   return (
      <Link
         to={`${matchUrl}/${_id}`}
         className={`list-group-item list-group-item-action messages-list-item ${classes}`}
      >
         <div className="message-content">
            <div className="d-flex w-100 justify-content-between">
               <h5 className="mb-1">{title}</h5>
            </div>
            <p className="mb-1">Date: {date}</p>
         </div>
         <aside>
            <div
               className="checkbox-container"
               onClick={(e) => onCheckboxClick(e, props.onToggle, props._id)}
            >
               <input type="checkbox" checked={isRead} onChange={(e) => e.stopPropagation()} />
            </div>
            <button
               className="btn btn-danger btn-sm"
               onClick={(e) => onButtonClick(e, props.onRemove, props._id)}
            >
               Remove
            </button>
         </aside>
      </Link>
   );
};

export default MessagesListEl;
