import React from 'react';
import ReactLoading from 'react-loading';

import './style.css';

const LoadingAnimation = () => {
   return (
      <div className="loading-animation">
         <ReactLoading color="#3c6cde" type="spokes" />
      </div>
   );
};

export default LoadingAnimation;