import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingAnimation from 'components/LoadingAnimation';

class AsyncLoader extends Component {
   constructor() {
      super();

      this.state = { showError: false };
      setTimeout(() => this.setState({ showError: true }), 3000);
   }
   
   render() {
      // If no error text is passed in props, use default
      const defaultError = 'If loading takes too long, please refresh the page...';
      const error = this.props.errorText || defaultError;

      if (!this.props.loaded) {
         return (
            <div>
               <LoadingAnimation />
               {(this.state.showError) ? <p>{error}</p> : ''}
            </div>
         );
      }
   }
}

AsyncLoader.propTypes = {
   loaded: PropTypes.oneOfType([
      PropTypes.bool
   ]).isRequired,
   errorText: PropTypes.string
}

export default AsyncLoader;