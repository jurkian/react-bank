import React, { useState } from 'react';

import NavigationHeader from 'components/Navigation/Header';
import MainNavigation from 'components/Navigation/MainNavigation';

import { useAppSelector } from '@hooks';

type Props = {};

const Navigation: React.FC<Props> = (props) => {
   const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

   const toggleMobileNav = () => setIsMobileNavVisible((prevState) => !prevState);
   const user = useAppSelector((state) => state.profile.data);

   return (
      <div className="row">
         <div className="col">
            <section className="module navigation">
               <NavigationHeader toggleMobileNav={toggleMobileNav} user={user} />
               <MainNavigation isMobileNavVisible={isMobileNavVisible} />
            </section>
         </div>
      </div>
   );
};

export default Navigation;
