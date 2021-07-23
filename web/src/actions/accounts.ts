import { getMyAccounts } from 'api/accounts';
import * as actionTypes from './actionTypes';

import { AppDispatch } from 'store';

export const fetchAccounts = () => async (dispatch: AppDispatch) => {
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

export const fetchAccountsStatus = (status: boolean) => ({
   type: actionTypes.FETCH_ACCOUNTS_STATUS,
   status,
});
