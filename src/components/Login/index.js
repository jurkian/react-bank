import React, { Component } from 'react';

class Login extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <div className="col-xs-12 ">
            <h1 className="text-center">Log in now</h1>

            <form>
               <div className="form-group">
                  <label htmlFor="email">Your email</label>
                  <input type="email" id="email" className="form-control" id="email" placeholder="Your email..." />
               </div>

               <div className="form-group">
                  <label htmlFor="password">Your password</label>
                  <input type="password" id="password" className="form-control" id="password" placeholder="Your password..." />
               </div>

               <div className="checkbox">
                  <label>
                     <input type="checkbox" name="remember" /> Keep me signed in
                  </label>
               </div>

               <button type="submit" className="btn btn-primary btn-lg btn-block">Log in now</button>
            </form>
         </div>
      );
   }
}

export default Login;