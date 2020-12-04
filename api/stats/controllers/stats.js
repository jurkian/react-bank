'use strict';

const getMyStats = async ctx => {
   try {
      const getStats = await strapi.query('stats').findOne();

      if (!getStats) {
         strapi.services.errors.throwError(400, 'No stats available, use dummy data creator');
      }

      // Stats: income, expenses for specific user
      const incomeStatsRes = getStats.income_stats
         .filter(el => el.type === 'income')
         .map(el => ({ collected_at: el.collected_at, value: el.value }));
      const expensesStatsRes = getStats.expenses_stats
         .filter(el => el.type === 'expenses')
         .map(el => ({ collected_at: el.collected_at, value: el.value }));

      return {
         incomeStats: incomeStatsRes,
         expensesStats: expensesStatsRes
      };
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

module.exports = {
   getMyStats
};
