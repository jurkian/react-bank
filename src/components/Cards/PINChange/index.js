import React, { Component } from 'react';

import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

class PINChange extends Component {
   constructor() {
      super();

      this.state = { singleCard: [], validationInfo: '' };
   }

   render() {
      return (
         <div className="col-sm-6 col-sm-offset-3">
            <h1>PIN change for {this.state.singleCard.id}. {this.state.singleCard.type} card</h1>

            <form onSubmit={this.handleFormSubmit.bind(this)}>
               <div className="form-group">
                  <label htmlFor="new-pin">Enter new PIN</label>
                  <input type="text" id="new-pin" name="new-pin" className="form-control" placeholder="Enter new PIN..." ref="newPin" required />
               </div>

               <div className="form-group">
                  <label htmlFor="new-pin-conf">Confirm new PIN</label>
                  <input type="text" id="new-pin-conf" name="new-pin-conf" className="form-control" placeholder="Confirm new PIN..." required />
               </div>

               <p className="validation-info">{this.state.validationInfo}</p>

               <SingleModuleButton text="Change PIN" type="submit" />
            </form>
         </div>
      );
   }

   componentDidMount() {
      fetch(`http://localhost:3001/cards/${this.props.match.params.cardId}`)
      .then(res => res.json())
      .then(singleCard => {
         this.setState({ singleCard });
      });
   }

   handleFormSubmit(e) {
      e.preventDefault();

      let newPin = parseInt(this.refs.newPin.value, 10);
      this.setState({ validationInfo: 'Sending...' });

      // TODO: create API endpoint to change PIN only
      fetch(`http://localhost:3001/cards/${this.state.singleCard.id}`, {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            'id': this.state.singleCard.id,
            'type': this.state.singleCard.type,
            'expires_month': this.state.singleCard.expires_month,
            'expires_year': this.state.singleCard.expires_year,
            'security_code': this.state.singleCard.security_code,
            'pin': newPin,
            'balance': this.state.singleCard.balance
         })
      })
      .then(res => res.json())
      .then(singleCard => {
         this.setState({ validationInfo: 'PIN successfully changed' });
      });
   }
}

export default PINChange;