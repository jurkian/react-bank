import React from 'react';

import './style.scss';

type Props = {
   clientsCount: number;
};

const HomeHeader: React.FC<Props> = (props) => (
   <header className="home-header">
      <h1>Welcome to react-bank</h1>

      <p>We have {props.clientsCount} clients right now!</p>
   </header>
);

export default HomeHeader;
