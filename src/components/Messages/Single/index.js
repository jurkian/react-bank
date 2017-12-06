import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from 'actions/messages';
import AsyncLoader from 'components/AsyncLoader';

class SingleMessage extends Component {
   componentWillMount() {
      this.props.fetchMessages();
   }

   render() {
      if (!this.props.fetchMessagesStatus) {
         return <AsyncLoader loaded={this.props.fetchMessagesStatus} />;

      } else {
         return (
            <div className="well">
               <h1>{this.props.singleMessage.id}. {this.props.singleMessage.title}</h1>
               <p>Date: {this.props.singleMessage.date}</p>

               <hr />

               <article dangerouslySetInnerHTML={{__html: this.props.singleMessage.content}} />
            </div>
         );
      }
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      singleMessage: state.messages.data[ownProps.match.params.messageId - 1],
      fetchMessagesStatus: state.messages.status
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchMessages: () => dispatch(fetchMessages())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SingleMessage);