import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';

class MessagesList extends Component {
   constructor() {
      super();

      this.state = { messages: [], search: '', loaded: false };
   }

   render() {

      // Messages
      // Allow search for message title
      const messages = this.state.messages
         .filter(message => message.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
         .map(message => <MessageEl key={message.id} {...message} matchUrl={this.props.match.url} />);

      return (
         <div>
            <h1>Messages</h1>

            <AsyncLoader loaded={this.state.loaded}>
               <p>There are {this.state.messages.length} messages in your box</p>

               <form onSubmit={this.handleFormSubmit.bind(this)}>
                  <div className="form-group">
                     <input className="form-control" placeholder="Search for..." onChange={this.findMessage.bind(this)} ref="search" />
                  </div>
               </form>

               <div className="list-group">
                  {messages}
               </div>
            </AsyncLoader>
         </div>
      );
   }

   componentDidMount() {
      axios.get('http://localhost:3001/messages')
      .then(res => res.data)
      .then(messages => this.setState({ messages, loaded: true }))
      .catch(() => this.setState({ loaded: 0 }));
   }

   findMessage() {
      this.setState({ search: this.refs.search.value });
   }

   handleFormSubmit(e) {
      e.preventDefault();
   }
}

// Single message element
const MessageEl = (props) => {
   return (
      <Link to={`${props.matchUrl}/${props.id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{props.id}. {props.title}</h4>
         <p className="list-group-item-text">
            date: {props.date}
         </p>
      </Link>
   );
}

MessageEl.propTypes = {
   matchUrl: PropTypes.string,
   id: PropTypes.number,
   title: PropTypes.string,
   date: PropTypes.string
}

export default MessagesList;