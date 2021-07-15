import React, { useState, useEffect } from 'react';
import { getUsersCount } from 'api/common';

import Loader from 'components/UI/Loader';
import Header from 'components/Home/Header';
import Features from 'components/Home/Features';
import NewFeatures from 'components/Home/NewFeatures';

type Props = {};

const Home: React.FC<Props> = (props) => {
   const [clientsCount, setClientsCount] = useState(0);
   const [isLoaded, setIsLoaded] = useState(false);

   const onDidMount = async () => {
      const usersCount = await getUsersCount();

      if (usersCount) {
         setClientsCount(usersCount);
         setIsLoaded(true);
      }
   };

   useEffect(() => {
      onDidMount();
   }, []);

   if (!isLoaded) {
      return <Loader />;
   }

   return (
      <div className="row">
         <div className="col">
            <section className="module home">
               <Header clientsCount={clientsCount} />
               <Features />
               <NewFeatures />
            </section>
         </div>
      </div>
   );
};

export default Home;
