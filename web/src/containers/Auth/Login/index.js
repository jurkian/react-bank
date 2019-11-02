import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import withAuth from 'hoc/WithAuth';

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
      // There will be automatic redirect to panel, in HOC
      this.props.auth(email, password).catch(error => this.setState({ loading: false, error }));
   };
}

const mapDispatchToProps = dispatch => {
   return {
      auth: (email, password) => dispatch(actions.auth(email, password))
   };
};

export default connect(null, mapDispatchToProps)(withAuth(Login));
