import React, { Component } from 'react';
import axios from 'axios';
import AsyncLoader from 'components/AsyncLoader';
import HomeHeader from './HomeHeader/index';
import HomeFeatures from './HomeFeatures/index';

class Home extends Component {
   constructor() {
      super();

      this.state = { clients: [], lastClient: {}, loaded: false };
   }

   render() {

      if (!this.state.loaded) {
         return <AsyncLoader loaded={this.state.loaded} />;

      } else {
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
   }

   componentDidMount() {
      axios.get('http://localhost:3001/clients')
      .then(res => res.data)
      .then(clients => {
         this.setState({
            clients,
            lastClient: clients[clients.length - 1],
            loaded: true
         });
      })
      .catch(() => this.setState({ loaded: 0 }));
   }
}

export default Home;