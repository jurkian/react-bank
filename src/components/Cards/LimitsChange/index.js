import React, { Component } from 'react';

class LimitsChange extends Component {
   constructor(props) {
      super(props);

      this.state = { singleCard: [], validationInfo: '' };
   }

   render() {
      return (
         <div className="col-sm-6 col-sm-offset-3">
            <h1>Limits change for {this.state.singleCard.id}. {this.state.singleCard.type} card</h1>

            <form onSubmit={this.handleFormSubmit.bind(this)}>
               <div className="form-group">
                  <label htmlFor="daily-withdrawal-limit">Enter new daily withdrawal limit</label>
                  <input type="text" id="daily-withdrawal-limit" name="daily-withdrawal-limit" className="form-control" placeholder="New daily withdrawal limit..." ref="newDWL" />
               </div>

               <div className="form-group">
                  <label htmlFor="daily-online-limit">Enter new daily online limit</label>
                  <input type="text" id="daily-online-limit" name="daily-online-limit" className="form-control" placeholder="New daily online limit..." ref="newDOL" />
               </div>

               <button type="submit" className="btn btn-primary btn-lg btn-block">Change limits</button>
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

      // DWL = Daily Withdrawal Limit
      // DOL = Daily Online Limit

      let newDWL = parseInt(this.refs.newDWL.value);
      let newDOL = parseInt(this.refs.newDOL.value);

      this.setState({ validationInfo: 'Sending...' });

      // TODO: create API endpoint to change limits only
      fetch(`http://localhost:3001/cards/${this.state.singleCard.id}`, {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            'id': this.state.singleCard.id,
            'type': this.state.singleCard.type,
            'expires_month': this.state.singleCard.expires_month,
            'expires_year': this.state.singleCard.expires_year,
            'security_code': this.state.singleCard.security_code,
            'pin': this.state.singleCard.pin,
            'balance': this.state.singleCard.balance,
            'daily_withdrawal_limit': (newDWL) ? newDWL : this.state.singleCard.daily_withdrawal_limit,
            'daily_online_limit': (newDOL) ? newDOL : this.state.singleCard.daily_online_limit
         })
      })
      .then(res => res.json())
      .then(singleCard => {
         this.setState({
            singleCard,
            validationInfo: 'Limits successfully changed'
         });
      });
   }
}

export default LimitsChange;