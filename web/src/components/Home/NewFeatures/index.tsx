import React from 'react';
import SingleButton from 'components/UI/Buttons/SingleButton';

import './style.scss';

const HomeNewFeatures: React.FC = () => (
   <div className="home-new-features-box">
      <SingleButton text="New feature: currency stats &raquo;" href="/currencies" size="lg" />
   </div>
);

export default HomeNewFeatures;
