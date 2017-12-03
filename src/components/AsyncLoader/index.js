import React from 'react';
import PropTypes from 'prop-types';
import LoadingAnimation from 'components/LoadingAnimation';

const AsyncLoader = ({ loaded, children, errorText }) => {

   // If no error text is passed in props, use default
   const defaultError = 'This content could not be loaded. Please refresh the page...';
   const error = errorText || defaultError;

   if (typeof loaded === 'boolean' && !loaded) {
      return <LoadingAnimation />;

   } else if (typeof loaded === 'boolean' && loaded) {
      return <div>
         {children}
      </div>;

   } else {
      return <div>
         <LoadingAnimation />
         <p>{error}</p>
      </div>;
   }
};

AsyncLoader.propTypes = {
   loaded: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([0])
   ]).isRequired,
   children: PropTypes.oneOfType([
      PropTypes.node
   ]),
   errorText: PropTypes.string
}

export default AsyncLoader;