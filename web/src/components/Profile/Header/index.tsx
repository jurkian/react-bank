import React from 'react';
import { formatDate } from 'tools';

import './style.scss';

type Props = {
   profile: {
      createdAt: Date;
      firstName: string;
      lastName: string;
      streetAddr: string;
      postcode: string;
      city: string;
      email: string;
   };
};

const ProfileHeader: React.FC<Props> = (props) => {
   const { firstName, lastName, streetAddr, postcode, city, email } = props.profile;
   let createdAt = formatDate(props.profile.createdAt, 'dd/MM/yyyy HH:mm');

   return (
      <header className="profile-header">
         <div className="profile-user-info">
            <h3>
               {firstName} {lastName}
            </h3>
            <p>
               {streetAddr}, {postcode} {city}
            </p>
            <p>
               <strong>Email: </strong> {email}
            </p>
            <p>
               <strong>Registered on</strong> {createdAt}
            </p>
         </div>

         <img src="https://placehold.it/200x200" alt={`${firstName} ${lastName} profile`} />
      </header>
   );
};

export default ProfileHeader;
