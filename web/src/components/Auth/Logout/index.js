import { Component } from 'react';
import firebase from 'tools/firebase';

class Logout extends Component {
   componentDidMount() {
      firebase
         .auth()
         .signOut()
         .then(() => this.props.history.push('/'));
   }

   render() {
      return null;
   }
}

export default Logout;
