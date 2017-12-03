import React, { Component } from 'react';
import axios from 'axios';
import LoadingAnimation from 'components/LoadingAnimation/index';
import SingleModuleButton from 'components/Buttons/SingleModuleButton/index';

class LimitsChange extends Component {
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

                     <p className="validation-info">{this.state.validationInfo}</p>

                     <SingleModuleButton text="Change limits" type="submit" />
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

      // DWL = Daily Withdrawal Limit
      // DOL = Daily Online Limit

      let newDWL = parseInt(this.refs.newDWL.value, 10);
      let newDOL = parseInt(this.refs.newDOL.value, 10);

      this.setState({ validationInfo: 'Sending...' });

      axios(`http://localhost:3001/cards/${this.state.singleCard.id}`, {
         method: 'patch',
         headers: { 'Content-Type': 'application/json' },
         data: {
            daily_withdrawal_limit: (newDWL) ? newDWL : this.state.singleCard.daily_withdrawal_limit,
            daily_online_limit: (newDOL) ? newDOL : this.state.singleCard.daily_online_limit
         }
      })
      .then(res => res.data)
      .then(singleCard => {
         this.setState({
            singleCard,
            validationInfo: 'Limits successfully changed'
         });
      });
   }
}

export default LimitsChange;