import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <div className="container">
            <h1>Log in now</h1>

            <form>
               <p>
                  <label htmlFor="email">Your email</label>
                  <input id="email" type="email" name="email" placeholder="Your email..." />
               </p>
               <p>
                  <label htmlFor="password">Your password</label>
                  <input id="password" type="password" name="password" placeholder="Your password..." />
               </p>

            </form>

            <Link to="/panel">
               <button>Log in now</button>
            </Link>
         </div>
      );
   }
}

export default Login;