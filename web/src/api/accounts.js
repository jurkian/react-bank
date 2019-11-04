import { callAPI } from './base';

// Get user's accounts
export const getMyAccounts = (params = '') => callAPI(`/accounts/${params}`);
