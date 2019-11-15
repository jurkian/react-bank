import React, { Component } from 'react';
import { getUsersCount } from 'api/common';

import Loader from 'components/UI/Loader';
import Header from 'components/Home/Header';
import Features from 'components/Home/Features';
import NewFeatures from 'components/Home/NewFeatures';

class Home extends Component {
   state = {
      clientsCount: 0,
      loaded: false
   };

   render() {
      if (!this.state.loaded) {
         return <Loader />;
      } else {
         return (
            <div className="row">
               <div className="col">
                  <section className="module home">
                     <Header clientsCount={this.state.clientsCount} />
                     <Features />
                     <NewFeatures />
                  </section>
               </div>
            </div>
         );
      }
   }

   async componentDidMount() {
      const usersCount = await getUsersCount();

      if (usersCount) {
         this.setState({
            clientsCount: usersCount.data,
            loaded: true
         });
      }
   }
}

export default Home;
