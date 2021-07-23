import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@hooks';

import * as actions from 'actions';
import MessagesListEl from '../ListElement';

interface Props extends RouteComponentProps {
   messages: {
      _id: string;
      title: string;
      isRead: boolean;
      sentDate: Date;
   }[];
}

const MessagesList: React.FC<Props> = (props) => {
   const dispatch = useAppDispatch();

   const [search, setSearch] = useState('');

   const messages = useAppSelector((state) => state.messages.data);

   const messageToggle = (id: string) => dispatch(actions.messageToggle(id));
   const messageRemove = (id: string) => dispatch(actions.messageRemove(id));
   const findMessage = (value: string) => setSearch(value);

   // Messages
   // Allow search by message title
   const searchText = search.toLowerCase();
   const messagesList = props.messages
      .filter((message) => message.title.toLowerCase().includes(searchText))
      .map((message) => (
         <MessagesListEl
            {...message}
            key={message._id}
            matchUrl={props.match.url}
            onToggle={() => messageToggle(message._id)}
            onRemove={() => messageRemove(message._id)}
         />
      ));

   return (
      <>
         <h1>Messages</h1>

         <p>There are {messages.length} messages in your box</p>

         <div className="form-group">
            <input
               className="form-control"
               placeholder="Search for..."
               onChange={(e) => findMessage(e.target.value)}
               ref="search"
            />
         </div>

         <div className="list-group">{messagesList}</div>
      </>
   );
};

export default MessagesList;
