import React, { Component } from 'react';
import axios from 'axios';
import LoadingAnimation from 'components/LoadingAnimation/index';
import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

class PINChange extends Component {
   constructor() {
      super();

      this.state = { singleCard: [], validationInfo: '', isFetching: true };
   }

   render() {
      return (
         <div className="col-sm-6 col-sm-offset-3">

            {this.state.isFetching ? (
               <LoadingAnimation />
            ) : (
               <div>
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
            )}

         </div>
      );
   }

   componentDidMount() {
      axios.get(`http://localhost:3001/cards/${this.props.match.params.cardId}`)
      .then(res => res.data)
      .then(singleCard => {
         this.setState({ singleCard, isFetching: false });
      });
   }

   handleFormSubmit(e) {
      e.preventDefault();

      let newPin = parseInt(this.refs.newPin.value, 10);
      this.setState({ validationInfo: 'Sending...' });

      axios(`http://localhost:3001/cards/${this.state.singleCard.id}`, {
         method: 'patch',
         headers: { 'Content-Type': 'application/json' },
         data: { pin: newPin }
      })
      .then(res => res.data)
      .then(singleCard => {
         this.setState({ validationInfo: 'PIN successfully changed' });
      });
   }
}

export default PINChange;