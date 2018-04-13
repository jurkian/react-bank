import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingAnimation from './LoadingAnimation';

const Fragment = React.Fragment;

class AsyncLoader extends Component {
   state = { showError: false }

   render() {
      // If no error text is passed in props, use default
      const defaultError = 'If loading takes too long, please refresh the page...';
      const error = this.props.errorText || defaultError;

      if (!this.props.loaded) {
         return (
            <Fragment>
               <LoadingAnimation />
               {(this.state.showError) ? <p>{error}</p> : null}
            </Fragment>
         );
      }
   }

   componentDidMount() {
      // Start timeout to show the error message
      this.errorTimeout = setTimeout(() => this.setState({ showError: true }), 3000);
   }

   componentWillUnmount() {
      // Remove the timeout when component will be unmounted
      // Otherwise it will still be working in background
      clearTimeout(this.errorTimeout);
   }
}

AsyncLoader.propTypes = {
   loaded: PropTypes.oneOfType([
      PropTypes.bool
   ]).isRequired,
   errorText: PropTypes.string
}

export default AsyncLoader;