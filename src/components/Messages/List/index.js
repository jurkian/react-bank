import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messageToggle, messageRemove } from 'actions/messages';
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
         .map(message => {
            return (
               <MessagesListEl
                  key={message.id}
                  {...message}
                  matchUrl={this.props.match.url}
                  onToggle={this.props.messageToggle}
                  onRemove={this.props.messageRemove}
               />
            )
         });

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

const mapDispatchToProps = (dispatch) => {
   return {
      messageToggle: (id, isToggled) => dispatch(messageToggle(id, isToggled)),
      messageRemove: (id) => dispatch(messageRemove(id))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(MessagesList);