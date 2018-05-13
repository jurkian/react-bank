import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import LoginBox from 'components/Auth/Login';

class Login extends Component {
   state = {
      loading: false,
      error: null
   };

   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <LoginBox
                  history={this.props.history}
                  onLoginSubmit={this.onLoginSubmit}
                  loading={this.state.loading}
                  error={this.state.error}
               />
            </div>
         </div>
      );
   }

   onLoginSubmit = (email, password) => {
      this.setState({ loading: true, error: null });

      // Dispatch auth action
      // There will be automatic redirect to panel, in SCU
      this.props.auth(email, password).catch(error => this.setState({ loading: false, error }));
   };

   componentDidMount() {
      // If user is logged in, redirect to panel
      if (this.props.authStatus) {
         this.doRedirect();
      }
   }

   shouldComponentUpdate(nextProps) {
      // If user is logged in, redirect to panel
      // Second check to make sure props were available at the moment
      if (nextProps.authStatus) {
         this.doRedirect();
      }

      return true;
   }

   doRedirect() {
      this.props.history.push('/panel');
      return false;
   }
}

const mapStateToProps = state => {
   return {
      authStatus: state.auth.status
   };
};

const mapDispatchToProps = dispatch => {
   return {
      auth: (email, password) => dispatch(actions.auth(email, password))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
