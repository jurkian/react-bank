import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom';

import SingleAccount from './SingleAccount/index';

class Accounts extends Component {
   constructor(props) {
      super(props);

      this.state = { accounts: [] };
   }

   render() {

      // Accounts
      const accounts = this.state.accounts
         .map(acc => <AccountEl key={acc.id} {...acc} />);

      return (
         <div className="container">

            <Route exact path={this.props.match.url} render={() => (
               <div className="container">
                  <h1>Accounts</h1>
                  <p>You have {this.state.accounts.length} accounts available</p>

                  <ul>
                     {accounts}
                  </ul>
               </div>
            )} />

            <Route path={`${this.props.match.url}/:accId`} component={SingleAccount} />
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
      <Link to={`/accounts/${props.id}`}>
         {props.id}, {props.type}, {props.sortcode}, {props.number}, {props.currency}, {props.balance}
      </Link>
   </li>);
}

export default Accounts;