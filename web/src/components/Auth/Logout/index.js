import { Component } from 'react';

class Logout extends Component {
   componentDidMount() {
      localStorage.removeItem('token');
      this.props.history.push('/');
   }

   render() {
      return null;
   }
}

export default Logout;
