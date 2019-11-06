import { callAPI } from './base';

// Get user's accounts
export const getMyAccounts = (params = '') => callAPI(`/accounts/my/${params}`);

// Get single account
export const getSingleAccount = id => callAPI(`/accounts/${id}`);
