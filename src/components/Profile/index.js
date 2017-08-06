import React, { Component } from 'react';

class Profile extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="container">
            <h1>Edit your account details</h1>

            <form>
               <p>
                  <label htmlFor="email">Your email</label>
                  <input id="email" type="email" name="email" placeholder="Your email..." />
               </p>
               <p>
                  <label htmlFor="password">Your password</label>
                  <input id="password" type="password" name="password" placeholder="Your password..." />
               </p>

               <p>
                  <button>Save changes</button>
               </p>
            </form>
         </div>
      );
   }
}

export default Profile;