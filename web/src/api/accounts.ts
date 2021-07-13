import { callAPI } from './base';

// Get user's accounts
export const getMyAccounts = () => callAPI(`/accounts/my`);

// Get single account
export const getSingleAccount = id => callAPI(`/accounts/${id}`);
