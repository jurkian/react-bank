import React, { Component } from 'react';

import HomeHeader from './HomeHeader/index';
import HomeFeatures from './HomeFeatures/index';

class Home extends Component {
   constructor() {
      super();

      this.state = { clients: [], lastClient: {} };
   }

   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <section className="home module">
                  <HomeHeader {...this.state} />
                  <HomeFeatures />
               </section>
            </div>
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