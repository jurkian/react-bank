import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import withAuth from 'hoc/WithAuth';

import * as H from 'history';
import { AppDispatch } from 'store';

import LoginBox from 'components/Auth/Login';

type MyProps = {
   history: H.History;
   login: (data?: {}) => {};
};

class Login extends Component<MyProps> {
   state = {
      loading: false,
      error: null,
   };

   render() {
      return (
         <div className="row">
            <div className="col">
               <LoginBox
                  history={props.history}
                  onLoginSubmit={this.onLoginSubmit}
                  loading={this.state.loading}
                  error={this.state.error}
               />
            </div>
         </div>
      );
   }

   onLoginSubmit = (identifier: string, password: string) => {
      this.setState({ loading: true, error: null });

      // Dispatch auth action
      // There will be automatic redirect to panel, in HOC
      props
         .login({ identifier, password })
         .catch((err: Error) => this.setState({ loading: false, err }));
   };
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
   return {
      login: (data: {}) => dispatch(actions.login(data)),
   };
};

export default connect(null, mapDispatchToProps)(withAuth(Login));
