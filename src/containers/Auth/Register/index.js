import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import RegisterBox from 'components/Auth/Register';

class Register extends Component {
   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <RegisterBox
                  history={this.props.history}
                  onAuth={this.props.onAuth}
                  loading={this.props.loading}
                  error={this.props.error}
               />
            </div>
         </div>
      );
   }

   componentDidMount() {
      // If user logged in, redirect to panel
      if (localStorage.getItem('token')) {
         this.props.history.push('/panel');
      }
   }
}

const mapStateToProps = state => {
   return {
      loading: state.auth.loading,
      error: state.auth.error
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onAuth: (email, password) => dispatch(actions.auth(email, password, true))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
