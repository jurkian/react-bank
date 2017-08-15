import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountsList extends Component {
   constructor(props) {
      super(props);

      this.state = { accounts: [] };
   }

   render() {

      // Accounts
      const accounts = this.state.accounts
         .map(acc => <AccountEl key={acc.id} {...acc} matchUrl={this.props.match.url} />);

      return (
         <div>
            <h1>Accounts</h1>
            <p>You have {this.state.accounts.length} accounts</p>

            <ul>
               {accounts}
            </ul>
         </div>
      );
   }

   componentDidMount() {
      fetch('http://localhost:3001/accounts')
      .then(res => res.json())
      .then(accounts => {
         this.setState({ accounts });
      });
   }
}

// Single account element
const AccountEl = (props) => {
   return (<li>
      <Link to={`${props.matchUrl}/${props.id}`}>
         {props.id}, {props.type}, {props.sortcode}, {props.number}, {props.currency}, {props.balance}
      </Link>
   </li>);
}

export default AccountsList;