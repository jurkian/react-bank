import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import LoadingAnimation from 'components/LoadingAnimation/index';

class AccountsList extends Component {
   constructor() {
      super();

      this.state = { accounts: [], isFetching: true };
   }

   render() {

      // Accounts
      const accounts = this.state.accounts
         .map(acc => <AccountEl key={acc.id} {...acc} matchUrl={this.props.match.url} />);

      return (
         <div>
            <h1>Accounts</h1>

            {this.state.isFetching ? (
               <LoadingAnimation />
            ) : (
               <div>
                  <p>You have {this.state.accounts.length} accounts</p>

                  <div className="list-group">
                     {accounts}
                  </div>
               </div>
            )}
         </div>
      );
   }

   componentDidMount() {
      axios.get('http://localhost:3001/accounts')
      .then(res => res.data)
      .then(accounts => {
         this.setState({ accounts, isFetching: false });
      });
   }
}

// Single account element
const AccountEl = (props) => {
   return (
      <Link to={`${props.matchUrl}/${props.id}`} className="list-group-item">
         <h4 className="list-group-item-heading">{props.id}. {props.type}</h4>
         <p className="list-group-item-text">
            Sortcode: {props.sortcode}, currency: {props.currency}, balance: {props.balance} {props.currency}
         </p>
      </Link>
   );
}

AccountEl.propTypes = {
   id: PropTypes.number,
   type: PropTypes.string,
   sortcode: PropTypes.string,
   currency: PropTypes.string,
   balance: PropTypes.number
}

export default AccountsList;