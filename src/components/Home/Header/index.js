import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const HomeHeader = (props) => (
   <header className="home-header">
      <h1>Welcome to react-bank</h1>

      <p>We have {props.clients.length} clients right now!</p>
      <p>
         {`Our last user is
            ${props.lastClient.first_name} ${props.lastClient.last_name}
            from ${props.lastClient.city}`}
      </p>
   </header>
);

HomeHeader.propTypes = {
   clients: PropTypes.array,
   lastClient: PropTypes.object
}

export default HomeHeader;