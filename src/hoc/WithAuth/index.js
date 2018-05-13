import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';

// Handle redirects for /login, /register and /panel
// Depending on auth data loaded from Firebase
const withAuth = WrappedComponent => {
   return class extends Component {
      componentDidMount() {
         this.shouldRedirect(this.props);
      }

      shouldComponentUpdate(nextProps) {
         this.shouldRedirect(nextProps);

         return true;
      }

      shouldRedirect(props) {
         const path = props.location.pathname;

         // If we are on login/register and auth is complete, redirect to /panel
         // Otherwise redirect to /login
         if ((path === '/login' || path === '/register') && props.authStatus) {
            this.props.history.push('/panel');
         } else if (path.startsWith('/panel')) {
            if (!props.authStatus) {
               this.props.history.push('/login');
            } else {
               this.props.fetchInitialData(this.props.userEmail);
            }
         }
      }

      render() {
         return <WrappedComponent {...this.props} />;
      }
   };
};

const mapStateToProps = state => {
   return {
      authStatus: state.auth.status,
      userEmail: state.auth.userEmail
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchInitialData: email => dispatch(actions.fetchInitialData(email))
   };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuth);
