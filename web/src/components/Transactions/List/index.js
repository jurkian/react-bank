import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import ReactPaginate from 'react-paginate';
import Loader from 'components/UI/Loader';
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
         this.props
            .fetchTransactions(this.props.pageNumber, this.state.perPage)
            .then(() => this.props.fetchTransactionsPaginationStatus(true));
      } else {
         this.props.fetchTransactionsPaginationStatus(true);
      }
   }

   handlePageClick = ({ selected }) => {
      this.props.fetchTransactionsPaginationStatus(false);
      this.props.setTransactionsPage(selected + 1).then(() => this.shouldFetchData());
   };

   findTransaction = () => {
      this.setState({ search: this.refs.search.value });
   };

   render() {
      if (!this.props.fetchPaginationStatus) {
         return <Loader />;
      } else {
         // Allow filtering by payee's name or transaction reference
         const searchText = this.state.search.toLowerCase();
         const transactionsList = this.props.transactions[this.props.pageNumber - 1]
            .filter(
               trans =>
                  trans.payee_name.toLowerCase().includes(searchText) ||
                  trans.reference.toLowerCase().includes(searchText)
            )
            .map(trans => (
               <TransactionsListEl key={trans.id} {...trans} matchUrl={this.props.match.url} />
            ));

         return (
            <div>
               <h1>Transactions</h1>

               <p>There are {this.props.transactionsCount} transactions right now!</p>
               <p>
                  <Link to={`${this.props.match.url}/new`} className="btn btn-primary">
                     New transfer
                  </Link>
               </p>

               <div className="form-group">
                  <input
                     className="form-control"
                     placeholder="Search for (payee/reference)..."
                     onChange={this.findTransaction}
                     ref="search"
                  />
               </div>

               <div className="list-group">{transactionsList}</div>

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

const mapStateToProps = state => {
   return {
      transactions: state.transactions.data,
      transactionsCount: 20, // FAKE IT: better API needed
      pageNumber: state.transactions.pageNumber,
      fetchPaginationStatus: state.transactions.paginationStatus
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchTransactions: (page, perPage) => dispatch(actions.fetchTransactions(page, perPage)),
      fetchTransactionsPaginationStatus: status =>
         dispatch(actions.fetchTransactionsPaginationStatus(status)),
      setTransactionsPage: number => dispatch(actions.setTransactionsPage(number))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
