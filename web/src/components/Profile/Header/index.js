import React from 'react';
import PropTypes from 'prop-types';
import { formatFirebaseDate } from 'tools';

import './style.scss';

const ProfileHeader = props => {
   const { first_name, last_name, street_address, postcode, city, email } = props.profile;
   let created_on = props.profile.created_on.seconds;

   created_on = formatFirebaseDate(created_on, 'DD/MM/YYYY HH:mm');

   return (
      <header className="profile-header">
         <div className="profile-user-info">
            <h3>
               {first_name} {last_name}
            </h3>
            <p>
               {street_address}, {postcode} {city}
            </p>
            <p>
               <strong>Email: </strong> {email}
            </p>
            <p>
               <strong>Registered on</strong> {created_on}
            </p>
         </div>

         <img src="https://placehold.it/200x200" alt={`${first_name} ${last_name} profile`} />
      </header>
   );
};

ProfileHeader.propTypes = {
   client: PropTypes.object
};

export default ProfileHeader;
