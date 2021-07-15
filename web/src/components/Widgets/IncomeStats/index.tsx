import React, { useState, useEffect } from 'react';
import { useAppSelector } from '@hooks';

import { getStats } from 'api/stats';

import Loader from 'components/UI/Loader';
import IncomeChart from '../Charts/IncomeChart';

type Props = {};

type AccDetails = {
   type?: string;
   currency?: string;
   number?: number;
};

const IncomeStats: React.FC<Props> = (props) => {
   const [accDetails, setAccDetails] = useState<AccDetails>({});
   const [chartData, setChartData] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);

   const firstAccount = useAppSelector((state) => state.accounts.data[0]);

   const doGetStats = async () => {
      // Get account stats for the last 30 days
      // For the first user's account
      try {
         const res = await getStats(firstAccount._id, 30);

         setAccDetails(res.accDetails);
         setChartData(res.data);
         setIsLoaded(true);
      } catch (err) {
         setIsLoaded(false);
      }
   };

   useEffect(() => {
      doGetStats();
   }, []);

   if (!isLoaded) {
      return <Loader />;
   }

   return (
      <section className="module stats-widget">
         <h3>Income change stats (30 days)</h3>
         <p>
            <strong>{accDetails.type} account</strong>
            {' / '}
            {accDetails.currency?.toUpperCase()}
            {' / '}
            {accDetails.number}
         </p>

         <IncomeChart data={chartData} />
      </section>
   );
};

export default IncomeStats;
