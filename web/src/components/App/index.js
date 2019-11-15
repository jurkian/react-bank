import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

import { updateAPIConfig } from 'api/base';
import { isValidToken } from 'tools';

import Layout from 'hoc/Layout';
import Modal from 'components/UI/Modal';
import NewsletterBox from 'components/NewsletterBox';

import Home from 'containers/Home';
import CurrencyStats from 'containers/CurrencyStats';
import Panel from 'containers/Panel';

import Login from 'containers/Auth/Login';
import Register from 'containers/Auth/Register';
import Logout from 'components/Auth/Logout';
import PageNotFound from 'components/PageNotFound';

import './app.scss';

class App extends Component {
   componentDidMount() {
      isValidToken()
         .then(token => {
            updateAPIConfig({ authToken: token });
            this.props.setAuthStatus(true);
         })
         .catch(() => {
            this.props.setAuthStatus(false);
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
      setAuthStatus: status => dispatch(actions.setAuthStatus(status)),
      showNewsletterModal: () => dispatch(actions.showModal('newsletter')),
      closeModal: () => dispatch(actions.closeModal())
   };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
