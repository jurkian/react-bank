import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import withAuth from 'hoc/WithAuth';

import RegisterBox from 'components/Auth/Register';

class Register extends Component {
   state = {
      loading: false,
      error: null
   };

   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <RegisterBox
                  history={this.props.history}
                  onRegisterSubmit={this.onRegisterSubmit}
                  loading={this.state.loading}
                  error={this.state.error}
               />
            </div>
         </div>
      );
   }

   onRegisterSubmit = (email, password) => {};
}

const mapDispatchToProps = dispatch => {
   return {
      auth: (email, password) => dispatch(actions.auth(email, password))
   };
};

export default connect(null, mapDispatchToProps)(withAuth(Register));
