import React from 'react';
import { useAppSelector } from '@hooks';

import './style.scss';

import ProfileHeader from 'components/Profile/Header';
import ProfileStats from 'components/Profile/Stats';
import ProfileLinks from 'components/Profile/Links';

type Props = {};

const Profile: React.FC<Props> = (props) => {
   const profile = useAppSelector((state) => state.profile.data);

   const links = [
      { href: '/panel/transfers', text: 'Transfers', icon: 'ion-card' },
      {
         href: '/panel/change-details',
         text: 'Change details',
         icon: 'ion-android-checkbox-outline',
      },
   ];

   return (
      <div className="row panel-content">
         <div className="col">
            <section className="module profile">
               <ProfileHeader profile={profile} />
               <ProfileStats stats={profile.stats} />
               <ProfileLinks links={links} />
            </section>
         </div>
      </div>
   );
};

export default Profile;
