import React, { Component } from 'react';

class Profile extends Component {
   constructor(props) {
      super(props);

      this.state = { client: {} };
   }

   render() {
      return (
         <div className="col-sm-6 col-sm-offset-3">
            <h1>Your account details</h1>
            <p>{this.state.client.first_name} {this.state.client.last_name}</p>
            <p>{this.state.client.street_address}, {this.state.client.postcode} {this.state.client.city}</p>
            <p><strong>Email: </strong> {this.state.client.email}</p>
            <p><strong>Registered on: </strong> {this.state.client.created_on}</p>

            <p>&nbsp;</p>

            <form onSubmit={this.handleFormSubmit.bind(this)}>
               <div className="form-group">
                  <label htmlFor="email">Change your email</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="Your new email..." ref="newEmail" />
               </div>

               <div className="form-group">
                  <label htmlFor="password">Change your password</label>
                  <input type="password" id="password" name="password" className="form-control" placeholder="Enter new password..." />
               </div>

               <button type="submit" className="btn btn-primary btn-lg btn-block">Save changes</button>
            </form>
         </div>
      );
   }

   componentDidMount() {
      // Get logged in client info
      fetch('http://localhost:3001/clients/1')
      .then(res => res.json())
      .then(client => this.setState({ client }));
   }

   handleFormSubmit(e) {
      e.preventDefault();
   }
}

export default Profile;