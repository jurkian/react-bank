import React, { Component } from 'react';
import firebase from 'tools/firebase';

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
               <div className="col-xs-12">
                  <section className="home module">
                     <Header clientsCount={this.state.clientsCount} />
                     <Features />
                     <NewFeatures />
                  </section>
               </div>
            </div>
         );
      }
   }

   componentDidMount() {
      const db = firebase.firestore();

      db
         .collection('users')
         .get()
         .then(querySnapshot => {
            this.setState({
               clientsCount: querySnapshot.size,
               loaded: true
            });
         })
         .catch(error => this.setState({ loaded: false }));
   }
}

export default Home;
