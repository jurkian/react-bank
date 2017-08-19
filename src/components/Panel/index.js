import React, { Component } from 'react';
import IncomeStats from '../Widgets/IncomeStats/index';

class Panel extends Component {
   constructor() {
      super();

      this.state = { client: '' }
   }

   render() {
      return (
         <div className="container">
            <h1>Welcome {this.state.client.first_name} {this.state.client.last_name}</h1>
            <IncomeStats />
         </div>
      );
   }

   componentDidMount() {
      // Get logged in client info
      fetch('http://localhost:3001/clients/1')
      .then(res => res.json())
      .then(client => this.setState({ client }));
   }
}

export default Panel;