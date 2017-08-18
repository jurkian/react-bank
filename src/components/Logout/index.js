import React, { Component } from 'react';

class Logout extends Component {
   constructor(props) {
      super(props);
   }

   componentWillMount() {

      // Let the server know
      fetch(`http://localhost:3001/clients/1`)
      .then(res => res.json())
      .then(res => {

         // Read the status
         // ...

         // Remove token from local storage
         localStorage.removeItem('user_token');

         // Redirect to /
         this.props.history.push('/');
      });
   }

   render() {
      return null;
   }
}

export default Logout;