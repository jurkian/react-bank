import { callAPI } from './base';

// Get user's transfers
export const getMyTransfers = (params = '') => callAPI(`/transfers/my/${params}`);

// Create a new transfer
export const createTransfer = data => callAPI(`/transfers`, 'post', data);
