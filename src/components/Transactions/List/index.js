import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
   fetchTransactions, setFetchPaginationStatus, setTransactionsPage
} from 'actions/transactions';
import ReactPaginate from 'react-paginate';
import AsyncLoader from 'components/AsyncLoader';
import TransactionsListEl from '../ListElement';

class TransactionsList extends Component {
   constructor(props) {
      super(props);

      const perPage = 8;

      this.state = {
         search: '',
         pageCount: Math.ceil(props.transactionsCount / perPage)
      };
   }

   shouldFetchData() {
      // If the data is already in state/store - only return it
      // Otherwise fetch new data from API, basing on selected page

      if (!this.props.transactions[this.props.pageNumber - 1]) {
         this.props.fetchTransactions(this.props.pageNumber, this.state.perPage)
            .then(() => this.props.setFetchPaginationStatus(true));

      } else {
         this.props.setFetchPaginationStatus(true);
      }
   }

   handlePageClick = ({ selected }) => {
      this.props.setFetchPaginationStatus(false);

      this.props.setTransactionsPage(selected + 1)
         .then(() => this.shouldFetchData());
   };

   findTransaction = () => {
      this.setState({ search: this.refs.search.value });
   }

   render() {

      if (!this.props.fetchPaginationStatus) {
         return <AsyncLoader loaded={this.props.fetchPaginationStatus} />;

      } else {

         // Allow filtering by payee's name
         const transactions = this.props.transactions[this.props.pageNumber - 1]
            .filter(trans => trans.payeeName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
            .map(trans => <TransactionsListEl key={trans.id} {...trans} matchUrl={this.props.match.url} />);

         return (
            <div>
               <h1>Transactions</h1>

               <p>There are {this.props.transactionsCount} transactions right now!</p>
               <p><Link to={`${this.props.match.url}/new`} className="btn btn-primary">New transfer</Link></p>

               <div className="form-group">
                  <input
                     className="form-control"
                     placeholder="Search for..."
                     onChange={this.findTransaction}
                     ref="search" />
               </div>

               <div className="list-group">
                  {transactions}
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
            </div>
         );
      }
   }

   componentDidMount() {
      this.shouldFetchData();
   }
}

const mapStateToProps = (state) => {
   return {
      transactions: state.transactions.data,
      transactionsCount: 20, // FAKE IT: better API needed
      pageNumber: state.transactions.pageNumber,
      fetchPaginationStatus: state.transactions.paginationStatus
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchTransactions: (page, perPage) => dispatch(fetchTransactions(page, perPage)),
      setFetchPaginationStatus: (status) => dispatch(setFetchPaginationStatus(status)),
      setTransactionsPage: (number) => dispatch(setTransactionsPage(number))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(TransactionsList);