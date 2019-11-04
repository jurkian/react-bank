import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import ReactPaginate from 'react-paginate';
import Loader from 'components/UI/Loader';
import TransfersListEl from '../ListElement';

class TransfersList extends Component {
   constructor(props) {
      super(props);

      const perPage = 8;

      this.state = {
         search: '',
         pageCount: Math.ceil(props.transfersCount / perPage)
      };
   }

   shouldFetchData() {
      // If the data is already in state/store - only return it
      // Otherwise fetch new data from API, basing on selected page

      if (!this.props.transfers[this.props.pageNumber - 1]) {
         this.props
            .fetchTransfers(this.props.pageNumber, this.state.perPage)
            .then(() => this.props.fetchTransfersPaginStatus(true));
      } else {
         this.props.fetchTransfersPaginStatus(true);
      }
   }

   handlePageClick = ({ selected }) => {
      this.props.fetchTransfersPaginStatus(false);
      this.props.setTransfersPage(selected + 1).then(() => this.shouldFetchData());
   };

   findTransaction = () => {
      this.setState({ search: this.refs.search.value });
   };

   render() {
      if (!this.props.fetchPaginStatus) {
         return <Loader />;
      } else {
         // Allow filtering by payee's name or transaction reference
         const searchText = this.state.search.toLowerCase();
         const transfersList = this.props.transfers[this.props.pageNumber - 1]
            .filter(
               trans =>
                  trans.payee_name.toLowerCase().includes(searchText) ||
                  trans.reference.toLowerCase().includes(searchText)
            )
            .map(trans => (
               <TransfersListEl key={trans.id} {...trans} matchUrl={this.props.match.url} />
            ));

         return (
            <div>
               <h1>Transfers</h1>

               <p>There are {this.props.transfersCount} transfers right now!</p>
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

               <div className="list-group">{transfersList}</div>

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
      transfers: state.transfers.data,
      transfersCount: 20, // FAKE IT: better API needed
      pageNumber: state.transfers.pageNumber,
      fetchPaginStatus: state.transfers.paginStatus
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchTransfers: (page, perPage) => dispatch(actions.fetchTransfers(page, perPage)),
      fetchTransfersPaginStatus: status => dispatch(actions.fetchTransfersPaginStatus(status)),
      setTransfersPage: number => dispatch(actions.setTransfersPage(number))
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(TransfersList);
