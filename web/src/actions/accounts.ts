import { getMyAccounts } from 'api/accounts';
import * as actionTypes from './actionTypes';

export const fetchAccounts = () => async dispatch => {
   try {
      const data = await getMyAccounts();

      if (!data) {
         dispatch(fetchAccountsStatus(false));
         return;
      }

      dispatch({ type: actionTypes.FETCH_ACCOUNTS, data });
   } catch (err) {
      dispatch(fetchAccountsStatus(false));
      // throw new Error('Accounts fetch failed');
   }
};

export const fetchAccountsStatus = status => ({
   type: actionTypes.FETCH_ACCOUNTS_STATUS,
   status
});
