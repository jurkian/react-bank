import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
   constructor() {
      super();

      this.state = { clients: '' };
   }

   render() {
      return (
         <div className="container">
            <h1>Home</h1>
            <p>We have {this.state.clients.length} clients right now!</p>
            <Link to="/login">
               <button>Click here to log in</button>
            </Link>
         </div>
      );
   }

   componentDidMount() {
      fetch('http://localhost:3001/clients')
      .then(res => res.json())
      .then(clients => {
         this.setState({ clients });
      });
   }

}

export default Home;