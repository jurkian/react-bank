import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import MessagesListEl from '../ListElement';

class MessagesList extends Component {
   constructor(props) {
      super(props);

      this.state = {
         search: ''
      };
   }

   findMessage = () => {
      this.setState({ search: this.refs.search.value });
   };

   render() {
      // Messages
      // Allow search by message title
      const searchText = this.state.search.toLowerCase();
      const messagesList = this.props.messages
         .filter(message => message.title.toLowerCase().includes(searchText))
         .map(message => (
            <MessagesListEl
               key={message._id}
               {...message}
               matchUrl={this.props.match.url}
               onToggle={this.props.messageToggle}
               onRemove={this.props.messageRemove}
            />
         ));

      return (
         <Fragment>
            <h1>Messages</h1>

            <p>There are {this.props.messages.length} messages in your box</p>

            <div className="form-group">
               <input
                  className="form-control"
                  placeholder="Search for..."
                  onChange={this.findMessage}
                  ref="search"
               />
            </div>

            <div className="list-group">{messagesList}</div>
         </Fragment>
      );
   }
}

const mapStateToProps = state => {
   return {
      messages: state.messages.data
   };
};

const mapDispatchToProps = dispatch => {
   return {
      messageToggle: id => dispatch(actions.messageToggle(id)),
      messageRemove: id => dispatch(actions.messageRemove(id))
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(MessagesList);
