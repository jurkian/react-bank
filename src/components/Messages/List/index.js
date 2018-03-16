import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messageToggle, messageRemove } from 'actions/messages';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import MessagesListEl from '../ListElement';

class MessagesList extends Component {
   constructor(props) {
      super(props);

      const perPage = 8;

      this.state = {
         search: '',
         allData: [],
         currentData: [],
         url: 'http://localhost:3001/messages',
         currentPage: 1,
         perPage,
         pageCount: Math.ceil(props.messagesCount / perPage)
      };
   }

   componentWillMount() {
      // Set default data based on loaded messages
      let allData = [];
      allData[0] = this.props.messages.filter((el, i) => i < this.state.perPage);

      // Prepare initial (perPage) items
      // Also put them in allData array for caching purposes
      this.setState({
         allData,
         currentData: allData[0]
      });
   }

   // Internal Ajax, because pagination is only local and doesn't affect global state
   fetchPaginationData(selectedPage) {
      axios(`${this.state.url}?_page=${this.state.currentPage}&_limit=${this.state.perPage}`, {
         method: 'get',
         headers: { 'Content-Type': 'application/json' }
      })
         .then(res => res.data)
         .then(data => {
            let allData = this.state.allData;
            allData[selectedPage] = data;

            this.setState({ allData, currentData: allData[selectedPage] });
         })
         .catch(error => { });
   }

   handlePageClick = ({ selected }) => {
      const selectedPage = selected;

      this.setState({ currentPage: selectedPage + 1 }, () => {
         const selectedPageInState = this.state.allData[selectedPage];

         // If the data is already in state/store - only return it
         // Otherwise fetch new data from API, basing on selected page
         if (selectedPageInState) {
            this.setState({ currentData: selectedPageInState });
         } else {
            this.fetchPaginationData(selectedPage);
         }
      });
   };

   findMessage() {
      this.setState({ search: this.refs.search.value });
   }

   render() {
      // Messages
      // Allow search for message title
      const messages = this.state.currentData
         .filter(message => message.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
         .map(message => (
            <MessagesListEl
               key={message.id}
               {...message}
               matchUrl={this.props.match.url}
               onToggle={this.props.messageToggle}
               onRemove={this.props.messageRemove}
            />
         )
      );

      return (
         <div>
            <h1>Messages</h1>

            <p>There are {this.props.messagesCount} messages in your box</p>

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
               />
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      // Messages = first part of data, NOT all of them
      messages: state.messages.data,
      messagesCount: state.messages.data.length
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