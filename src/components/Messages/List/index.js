import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
   fetchMessages, setFetchPaginationStatus, messageToggle, messageRemove, setMessagesPage
} from 'actions/messages';
import ReactPaginate from 'react-paginate';
import AsyncLoader from 'components/UI/AsyncLoader';
import MessagesListEl from '../ListElement';

const Fragment = React.Fragment;

class MessagesList extends Component {
   constructor(props) {
      super(props);

      const perPage = 8;

      this.state = {
         search: '',
         pageCount: Math.ceil(props.messagesCount / perPage)
      };
   }

   shouldFetchData() {
      // If the data is already in state/store - only return it
      // Otherwise fetch new data from API, basing on selected page

      if (!this.props.messages[this.props.pageNumber - 1]) {
         this.props.fetchMessages(this.props.pageNumber, this.state.perPage)
            .then(() => this.props.setFetchPaginationStatus(true));

      } else {
         this.props.setFetchPaginationStatus(true);
      }
   }

   handlePageClick = ({ selected }) => {
      this.props.setFetchPaginationStatus(false);

      this.props.setMessagesPage(selected + 1)
         .then(() => this.shouldFetchData());
   };

   findMessage = () => {
      this.setState({ search: this.refs.search.value });
   }

   render() {
      // Messages
      // Allow search for message title
      if (!this.props.fetchPaginationStatus) {
         return <AsyncLoader loaded={this.props.fetchPaginationStatus} />;

      } else {
         const messages = this.props.messages[this.props.pageNumber - 1]
            .filter(message => message.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
            .map(message => (
               <MessagesListEl
                  key={message.id}
                  {...message}
                  matchUrl={this.props.match.url}
                  onToggle={this.props.messageToggle}
                  onRemove={this.props.messageRemove}
               />
            ));

         return (
            <Fragment>
               <h1>Messages</h1>

               <p>There are {this.props.messagesCount} messages in your box</p>

               <div className="form-group">
                  <input
                     className="form-control"
                     placeholder="Search for..."
                     onChange={this.findMessage}
                     ref="search" />
               </div>

               <div className="list-group">
                  {messages}
               </div>

               <div className="pagination-container">
                  <ReactPaginate
                     pageCount={this.state.pageCount}
                     pageRangeDisplayed={3}
                     marginPagesDisplayed={2}
                     previousLabel={'Previous'}
                     nextLabel={'Next'}
                     breakLabel={<span>...</span>}
                     onPageChange={this.handlePageClick}
                     containerClassName={'pagination'}
                     activeClassName={'active'}
                     disableInitialCallback={true}
                     forcePage={this.props.pageNumber - 1}
                  />
               </div>
            </Fragment>
         );
      }
   }

   componentDidMount() {
      this.shouldFetchData();
   }
}

const mapStateToProps = (state) => {
   return {
      messages: state.messages.data, // first part of messages data
      messagesCount: 20, // FAKE IT: better API needed
      pageNumber: state.messages.pageNumber,
      fetchPaginationStatus: state.messages.paginationStatus
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchMessages: (page, perPage) => dispatch(fetchMessages(page, perPage)),
      setFetchPaginationStatus: (status) => dispatch(setFetchPaginationStatus(status)),
      setMessagesPage: (number) => dispatch(setMessagesPage(number)),
      messageToggle: (id, isToggled) => dispatch(messageToggle(id, isToggled)),
      messageRemove: (id) => dispatch(messageRemove(id)),
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(MessagesList);