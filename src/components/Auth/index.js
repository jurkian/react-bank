// Every logged in user has a JWT token in localStorage
// If it doesn't exist, redirect to /login

// This is just a general check if user has access
// Further checks will be during API connections, with Authentication headers

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from 'actions/profile';
import axios from 'axios';

class Auth extends Component {
   // Get user's profile because we use it all over the panel
   componentWillMount() {
      if (!this.props.fetchProfileStatus) {
         this.props.fetchProfile();
      }
   }

   render() {
      const token = localStorage.getItem('user_token');

      if (!token) {
         this.props.history.push('/login');
      }

      // Set default Authorization header for axios
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return null;
   }
}

const mapStateToProps = (state) => {
   return {
      fetchProfileStatus: state.profile.status
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchProfile: () => dispatch(fetchProfile())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Auth);