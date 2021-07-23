import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useAppSelector } from '@hooks';

import { formatDate } from 'tools';

interface Params {
   messageId: string;
}

interface Props extends RouteComponentProps<Params> {}

type Message = {
   _id: string;
   title: string;
   sentDate: Date;
   content: string;
};

const SingleMessage: React.FC<Props> = (props) => {
   const singleMessage: Message = useAppSelector((state) =>
      state.messages.data.find((el) => el._id === messageId)
   );
   const messageId = props.match.params.messageId;
   const sentDate = formatDate(singleMessage?.sentDate, 'dd/MM/yyyy HH:mm');

   return (
      <section className="module single-message">
         <h1>{singleMessage.title}</h1>
         <p>Date: {sentDate}</p>

         <hr />

         <article dangerouslySetInnerHTML={{ __html: singleMessage.content }} />
      </section>
   );
};

export default SingleMessage;
