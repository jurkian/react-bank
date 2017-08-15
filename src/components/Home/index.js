import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
   constructor() {
      super();

      this.state = { clients: '', lastClient: '' };
   }

   render() {
      return (
         <div className="container">
            <h1>Welcome to React-Bank</h1>
            <p>We have {this.state.clients.length} clients right now!</p>
            <p>
               {`Our last user is
                  ${this.state.lastClient.first_name} ${this.state.lastClient.last_name}
                  from ${this.state.lastClient.city}`}
            </p>

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
         this.setState({
            clients,
            lastClient: clients[clients.length - 1]
         });
      });
   }

}

export default Home;