import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MessagesList extends Component {
   constructor(props) {
      super(props);

      this.state = { messages: [], search: '' };
   }

   render() {

      // Messages
      // Allow search for message title
      const messages = this.state.messages
         .filter(message => message.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
         .map(message => <MessageEl key={message.id} {...message} />);

      return (
         <div>
            <h1>Messages</h1>
            <p>There are {this.state.messages.length} messages in your box</p>

            <form className="search-form">
               <input placeholder="Search for..." onChange={this.findMessage.bind(this)} ref="search" />
            </form>

            <ul>
               {messages}
            </ul>
         </div>
      );
   }

   componentDidMount() {
      fetch('http://localhost:3001/messages')
      .then(res => res.json())
      .then(messages => {
         this.setState({ messages });
      });
   }

   findMessage() {
      this.setState({ search: this.refs.search.value });
   }
}

// Single message element
const MessageEl = (props) => {
   return (<li>
      <Link to={`/messages/${props.id}`}>
         {props.id}, {props.title}, {props.date}
      </Link>
   </li>);
}

export default MessagesList;