import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

import firebase from 'tools/firebase';

import AsyncComponentLoader from 'tools/AsyncComponentLoader';
import Layout from 'hoc/Layout';
import Modal from 'components/UI/Modal';
import NewsletterBox from 'components/NewsletterBox';

import Logout from 'components/Auth/Logout';
import PageNotFound from 'components/PageNotFound';

import './app.scss';

const Home = AsyncComponentLoader({
   loader: () => import('containers/Home')
});

const Login = AsyncComponentLoader({
   loader: () => import('containers/Auth/Login')
});

const Register = AsyncComponentLoader({
   loader: () => import('containers/Auth/Register')
});

const CurrencyStats = AsyncComponentLoader({
   loader: () => import('containers/CurrencyStats')
});

const Panel = AsyncComponentLoader({
   loader: () => import('containers/Panel')
});

class App extends Component {
   componentDidMount() {
      // Auth state changed
      firebase.auth().onAuthStateChanged(user => {
         if (user) {
            // User logged in - store status and his email
            this.props.setAuthStatus(true, user.email);
         } else {
            // Not logged in - set status to false
            this.props.setAuthStatus(false);
         }
      });
   }

   render() {
      return (
         <Layout>
            <Modal
               isVisible={this.props.isModalVisible}
               type={this.props.modalType}
               close={this.props.closeModal}
            />
            <Switch>
               <Route path="/panel" component={Panel} />
               <Route path="/currencies" component={CurrencyStats} />
               <Route path="/login" component={Login} />
               <Route path="/logout" component={Logout} />
               <Route path="/register" component={Register} />
               <Route exact path="/" component={Home} />
               <Route component={PageNotFound} />
            </Switch>
            <NewsletterBox clicked={this.props.showNewsletterModal} />
         </Layout>
      );
   }
}

const mapStateToProps = state => {
   return {
      isModalVisible: state.modal.isVisible,
      modalType: state.modal.type
   };
};

const mapDispatchToProps = dispatch => {
   return {
      setAuthStatus: (status, email) => dispatch(actions.setAuthStatus(status, email)),
      showNewsletterModal: () => dispatch(actions.showModal('newsletter')),
      closeModal: () => dispatch(actions.closeModal())
   };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
