import { getMyAccounts } from 'api/accounts';
import * as actionTypes from './actionTypes';

export const fetchAccounts = () => async dispatch => {
   try {
      const accounts = await getMyAccounts();

      if (!accounts) {
         dispatch(fetchAccountsStatus(false));
      }

      dispatch({ type: actionTypes.FETCH_ACCOUNTS, data: accounts });

      // let accData = accounts.docs.map(doc => ({
      //    ...doc.data(),
      //    id: doc.id
      // }));
   } catch (err) {
      throw new Error('Accounts fetch failed');
   }
};

export const fetchAccountsStatus = status => ({
   type: actionTypes.FETCH_ACCOUNTS_STATUS,
   status
});
