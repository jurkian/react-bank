type StatsData = {
   collected_at: Date;
   type: string;
   value: string;
};

type Stat = {
   income_stats: StatsData;
   expenses_stats: StatsData;
};

export default Stat;
