import React from 'react';
import ReactLoading from 'react-loading';

import './style.scss';

const LoadingAnimation: React.FC = () => {
   return (
      <div className="loading-animation">
         <ReactLoading color="#3c6cde" type="spokes" width={64} height={64} delay={100} />
      </div>
   );
};

export default LoadingAnimation;
