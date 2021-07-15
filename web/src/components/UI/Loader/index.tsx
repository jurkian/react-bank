import React, { useState, useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';

const Loader: React.FC = () => {
   const [showError, setShowError] = useState(false);

   let errorTimeout: ReturnType<typeof setTimeout>;

   useEffect(() => {
      // Start timeout to show the error message
      errorTimeout = setTimeout(() => setShowError(true), 3000);

      return () => {
         // Cleanup
         // Remove the timeout when component will be unmounted
         // Otherwise it will still be working in background
         clearTimeout(errorTimeout);
      };
   }, []);

   return (
      <>
         <LoadingAnimation />

         {showError ? <p>If loading takes too long, please refresh the page...</p> : null}
      </>
   );
};

export default Loader;
