const cleanDatabase = async () => {
   console.log('Database cleaning started');

   try {
      // Clean up all models
      // Promises
      const deleteUsers = strapi.query('user', 'users-permissions').delete();
      const deleteAccounts = strapi.query('account').delete();
      const deleteCards = strapi.query('card').delete();
      const deleteTransfers = strapi.query('transfer').delete();
      const deleteMessages = strapi.query('message').delete();
      const deleteStats = strapi.query('stats').delete();

      const res = await Promise.all([
         deleteUsers,
         deleteAccounts,
         deleteCards,
         deleteTransfers,
         deleteMessages,
         deleteStats
      ]);

      if (res) {
         console.log('Database cleaning successful');
      }
   } catch (error) {
      debugger;
      console.log('Database cleaning failed', error.message);
   }
};

module.exports = cleanDatabase;
