import React from 'react';
import SingleButton from 'components/Buttons/SingleButton';

import './style.css';

const HomeNewFeatures = () => {
   return (
      <div className="home-new-features-box">
         <SingleButton text="New feature: currency stats &raquo;" href="/currencies" size="lg" />
      </div>
   );
}

export default HomeNewFeatures;