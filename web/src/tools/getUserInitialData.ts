import { getMyself } from 'api/users';
import { getMyAccounts } from 'api/accounts';
import { getMyCards } from 'api/cards';
import { getMyTransfers } from 'api/transfers';
import { getMyMessages } from 'api/messages';

// Fetch data for all the sections
const getUserInitialData = async () => {
   try {
      const data = {
         user: await getMyself(),
         accounts: await getMyAccounts(),
         cards: await getMyCards(),
         transfers: await getMyTransfers(),
         messages: await getMyMessages(),
      };

      return data;
   } catch (err) {
      throw new Error(err);
   }
};

export default getUserInitialData;
