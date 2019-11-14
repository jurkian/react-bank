import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TransfersListEl from '../ListElement';

class TransfersList extends Component {
   constructor(props) {
      super(props);

      this.state = {
         search: ''
      };
   }

   findTransfer = () => {
      this.setState({ search: this.refs.search.value });
   };

   render() {
      // Allow filtering by payee's name or transfer reference
      const searchText = this.state.search.toLowerCase();
      const transfersList = this.props.transfers
         .filter(
            trans =>
               trans.payeeName.toLowerCase().includes(searchText) ||
               trans.reference.toLowerCase().includes(searchText)
         )
         .map(trans => (
            <TransfersListEl key={trans._id} {...trans} matchUrl={this.props.match.url} />
         ));

      return (
         <div>
            <h1>Transfers</h1>

            <p>There are {this.props.transfers.length} transfers right now!</p>
            <p>
               <Link to={`${this.props.match.url}/new`} className="btn btn-primary">
                  New transfer
               </Link>
            </p>

            <div className="form-group">
               <input
                  className="form-control"
                  placeholder="Search for (payee/reference)..."
                  onChange={this.findTransfer}
                  ref="search"
               />
            </div>

            <div className="list-group">{transfersList}</div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      transfers: state.transfers.data,
      transfersCount: 20 // FAKE IT: better API needed
   };
};

export default connect(mapStateToProps)(TransfersList);
