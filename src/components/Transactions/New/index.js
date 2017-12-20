import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Formsy from 'formsy-react';
import FormsyInput from 'components/FormsyFields/input';
import FormsySelect from 'components/FormsyFields/select';
import FormsyTextarea from 'components/FormsyFields/textarea';
import { fetchAccounts } from 'actions/accounts';
import AsyncLoader from 'components/AsyncLoader';
import SingleModuleButton from 'components/Buttons/SingleModuleButton';

// Validations
import {
   targetAccNumberValidations,
   targetSortCodeValidations,
   targetNameValidations,
   targetAddressValidations,
   referenceValidations,
   amountValidations
} from './validations';

class NewTransaction extends Component {
   constructor() {
      super();

      this.state = { validationInfo: '' };
   }

   componentWillMount() {
      this.props.fetchAccounts();
   }  

   render() {
      if (!this.props.fetchAccountsStatus) {
         return <AsyncLoader loaded={this.props.fetchAccountsStatus} />;

      } else {

         const accounts = this.props.accounts.data;
         const firstUserAccountInfo = `${accounts[0].type}, ${accounts[0].sortcode}, ${accounts[0].balance} ${accounts[0].currency}`;
         const userAccountsList = accounts.map((acc, index) => (
            <option key={index} value={index}>
               {`${acc.type}, ${acc.sortcode}, ${acc.balance} ${acc.currency}`}
            </option>
         ));

         return (
            <div className="row">
               <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <h1>New transfer</h1>

                  <Formsy
                     onValidSubmit={this.handleFormSubmit.bind(this)}>

                     <div>
                        <div className="form-group">
                           <label htmlFor="user-account">Choose your account</label>
                           <FormsySelect name="userAccount" id="user-account" value="0">
                              {userAccountsList}
                           </FormsySelect>
                        </div>

                        <div className="form-group">
                           <label htmlFor="target-acc-number">Recipient's account number</label>
                           <FormsyInput
                              name="targetAccNumber"
                              type="text"
                              id="target-acc-number"
                              placeholder="Recipient's account number..."
                              {...targetAccNumberValidations}
                              required />
                        </div>

                        <div className="form-group">
                           <label htmlFor="target-sort-code">Recipient's sort code</label>
                           <FormsyInput
                              name="targetSortCode"
                              type="text"
                              id="target-sort-code"
                              placeholder="Recipient's sort code..."
                              {...targetSortCodeValidations}
                              required />
                        </div>

                        <div className="form-group">
                           <label htmlFor="target-name">Recipient's name</label>
                           <FormsyInput
                              name="targetName"
                              type="text"
                              id="target-name"
                              placeholder="Recipient's name..."
                              {...targetNameValidations}
                              required />
                        </div>

                        <div className="form-group">
                           <label htmlFor="target-address">Recipient's address</label>
                           <FormsyTextarea
                              name="targetAddress"
                              type="text"
                              id="target-address"
                              placeholder="Recipient's address..."
                              {...targetAddressValidations} />
                        </div>

                        <div className="form-group">
                           <label htmlFor="reference">Reference</label>
                           <FormsyInput
                              name="reference"
                              type="text"
                              id="reference"
                              placeholder="Reference..."
                              {...referenceValidations}
                              required />
                        </div>

                        <div className="form-group">
                           <label htmlFor="amount">Amount</label>
                           <FormsyInput
                              name="amount"
                              type="text"
                              id="amount"
                              placeholder="Amount..."
                              {...amountValidations}
                              required />
                        </div>

                        <p className="validation-info">{this.state.validationInfo}</p>
                     </div>

                     <SingleModuleButton text="Confirm transfer" type="submit" />
                  </Formsy>
               </div>
            </div>
         );
      }
   }

   handleFormSubmit(model) {
      const {
         userAccount,
         targetAccNumber,
         targetSortCode,
         targetName,
         targetAddress,
         reference,
         amount
      } = model;

      this.setState({ validationInfo: 'Sending...' });

      axios(`http://localhost:3001/transactions`, {
         method: 'post',
         headers: { 'Content-Type': 'application/json' },
         data: {
            date: '24/07/2017 22:38',
            amount,
            payee: 'John Laboune',
            type: 'Transfer',
            status: 'Done'
         }
      })
      .then(res => res.data)
      .then(res => {
         this.setState({ validationInfo: 'Transfer done' });
      });
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      accounts: state.accounts,
      fetchAccountsStatus: state.accounts.status,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchAccounts: () => dispatch(fetchAccounts())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NewTransaction);