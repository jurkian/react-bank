import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ProfileHeader = (props) => {
   return (
      <header className="profile-header">
         <div className="profile-user-info">
            <h3>{props.client.first_name} {props.client.last_name}</h3>
            <p>{props.client.street_address}, {props.client.postcode} {props.client.city}</p>
            <p><strong>Email: </strong> {props.client.email}</p>
            <p><strong>Registered on</strong> {props.client.created_on}</p>
         </div>

         <img src="https://placehold.it/200x200" alt={`${props.client.first_name} ${props.client.last_name} profile`} />
      </header>
   );
}

ProfileHeader.propTypes = {
   client: PropTypes.object
}

export default ProfileHeader;