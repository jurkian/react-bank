import React, { Component } from 'react';

class Profile extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="col-sm-6 col-sm-offset-3">
            <h1>Edit your account details</h1>

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

   handleFormSubmit(e) {
      e.preventDefault();
   }
}

export default Profile;