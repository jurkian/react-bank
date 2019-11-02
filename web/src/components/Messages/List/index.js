import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import ReactPaginate from 'react-paginate';
import Loader from 'components/UI/Loader';
import MessagesListEl from '../ListElement';

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
         this.props
            .fetchMessages(this.props.pageNumber, this.state.perPage)
            .then(() => this.props.fetchMessagesPaginationStatus(true));
      } else {
         this.props.fetchMessagesPaginationStatus(true);
      }
   }

   handlePageClick = ({ selected }) => {
      this.props.fetchMessagesPaginationStatus(false);
      this.props.setMessagesPage(selected + 1).then(() => this.shouldFetchData());
   };

   findMessage = () => {
      this.setState({ search: this.refs.search.value });
   };

   render() {
      // Messages
      // Allow search for message title
      if (!this.props.fetchPaginationStatus) {
         return <Loader />;
      } else {
         const searchText = this.state.search.toLowerCase();
         const messagesList = this.props.messages[this.props.pageNumber - 1]
            .filter(message => message.title.toLowerCase().includes(searchText))
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
                     ref="search"
                  />
               </div>

               <div className="list-group">{messagesList}</div>

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

const mapStateToProps = state => {
   return {
      messages: state.messages.data, // first part of messages data
      messagesCount: 20, // FAKE IT: better API needed
      pageNumber: state.messages.pageNumber,
      fetchPaginationStatus: state.messages.paginationStatus
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchMessages: (page, perPage) => dispatch(actions.fetchMessages(page, perPage)),
      messageToggle: (id, isToggled) => dispatch(actions.messageToggle(id, isToggled)),
      messageRemove: id => dispatch(actions.messageRemove(id)),
      fetchMessagesPaginationStatus: status =>
         dispatch(actions.fetchMessagesPaginationStatus(status)),
      setMessagesPage: number => dispatch(actions.setMessagesPage(number))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
