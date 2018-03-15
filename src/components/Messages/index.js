import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMessages } from 'actions/messages';
import AsyncLoader from 'components/AsyncLoader';

import MessagesList from './List/index';
import SingleMessage from './Single/index';

class Messages extends Component {
   componentWillMount() {
      if (!this.props.fetchMessagesStatus) {
         this.props.fetchMessages();
      }
   }

   render() {
      if (!this.props.fetchMessagesStatus) {
         return <AsyncLoader loaded={this.props.fetchMessagesStatus} />;

      } else {
         return (
            <div className="row panel-content">
               <div className="col-xs-12">
                  <Route exact path={this.props.match.url} component={MessagesList} />
                  <Route path={`${this.props.match.url}/:messageId`} component={SingleMessage} />
               </div>
            </div>
         );
      }
   }
}

const mapStateToProps = (state) => {
   return {
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
)(Messages);