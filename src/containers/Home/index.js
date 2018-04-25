import React, { Component } from 'react';
import axios from 'axios';

import Loader from 'components/UI/Loader';
import Header from 'components/Home/Header';
import Features from 'components/Home/Features';
import NewFeatures from 'components/Home/NewFeatures';

class Home extends Component {
   state = {
      clients: [],
      lastClient: {},
      loaded: false
   };

   render() {
      if (!this.state.loaded) {
         return <Loader />;
      } else {
         return (
            <div className="row">
               <div className="col-xs-12">
                  <section className="home module">
                     <Header {...this.state} />
                     <Features />
                     <NewFeatures />
                  </section>
               </div>
            </div>
         );
      }
   }

   componentDidMount() {
      axios
         .get('/users_data')
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
