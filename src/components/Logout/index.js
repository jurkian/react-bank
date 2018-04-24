import { Component } from 'react';
import axios from 'axios';

class Logout extends Component {
   componentWillMount() {
      // Let the server know
      axios
         .get(`http://localhost:3001/users_data/1`)
         .then(res => res.data)
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
