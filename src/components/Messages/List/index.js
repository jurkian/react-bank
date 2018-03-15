import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagesListEl from '../ListElement';

class MessagesList extends Component {
   constructor() {
      super();

      this.state = { search: '' };
   }

   render() {
      // Messages
      // Allow search for message title
      const messages = this.props.messages
         .filter(message => message.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
         .map(message => <MessagesListEl key={message.id} {...message} matchUrl={this.props.match.url} />);

      return (
         <div>
            <h1>Messages</h1>

            <p>There are {this.props.messages.length} messages in your box</p>

            <div className="form-group">
               <input
                  className="form-control"
                  placeholder="Search for..."
                  onChange={this.findMessage.bind(this)}
                  ref="search" />
            </div>

            <div className="list-group">
               {messages}
            </div>
         </div>
      );
   }

   findMessage() {
      this.setState({ search: this.refs.search.value });
   }
}

const mapStateToProps = (state) => {
   return {
      messages: state.messages.data
   }
};

export default connect(mapStateToProps)(MessagesList);