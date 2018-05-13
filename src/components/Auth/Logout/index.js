import { Component } from 'react';
import firebase from 'components/Utilities/Firebase';

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
