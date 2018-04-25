import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMessages } from 'actions/messages';
import Loader from 'components/UI/Loader';

import MessagesList from 'components/Messages/List';
import SingleMessage from 'components/Messages/Single';

class Messages extends Component {
   componentWillMount() {
      if (!this.props.fetchMessagesStatus) {
         this.props.fetchMessages();
      }
   }

   render() {
      if (!this.props.fetchMessagesStatus) {
         return <Loader />;
      } else {
         return (
            <div className="row panel-content">
               <div className="col-xs-12">
                  <Switch>
                     <Route exact path={this.props.match.url} component={MessagesList} />
                     <Route path={`${this.props.match.url}/:messageId`} component={SingleMessage} />
                  </Switch>
               </div>
            </div>
         );
      }
   }
}

const mapStateToProps = state => {
   return {
      fetchMessagesStatus: state.messages.status
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchMessages: (page, perPage) => dispatch(fetchMessages(page, perPage))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
