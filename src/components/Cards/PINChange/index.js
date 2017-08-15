import React, { Component } from 'react';

class PINChange extends Component {
   constructor(props) {
      super(props);

      this.state = { singleCard: [], validationInfo: '' };
   }

   render() {
      return (
         <div>
            <h1>PIN change for {this.state.singleCard.id}. {this.state.singleCard.type} card</h1>

            <form onSubmit={this.handleFormSubmit.bind(this)}>
               <p>
                  <label htmlFor="new-pin">Enter new PIN</label>
                  <input id="new-pin" type="text" name="new-pin" placeholder="Enter new PIN..." ref="newPin" required />
               </p>
               <p>
                  <label htmlFor="new-pin-conf">Confirm new PIN</label>
                  <input id="new-pin-conf" type="text" name="new-pin-conf" placeholder="Confirm new PIN..." required />
               </p>

               <button type="submit">Change PIN</button>
               <p className="validation-info">{this.state.validationInfo}</p>
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

      let newPin = parseInt(this.refs.newPin.value);
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