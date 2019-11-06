import { callAPI } from './base';

// Get user's transfers
export const getMyTransfers = (params = '') => callAPI(`/transfers/my/${params}`);

// Get single transfer
export const getSingleTransfer = id => callAPI(`/transfers/${id}`);

// Create a new transfer
export const createTransfer = data => callAPI(`/transfers`, 'post', data);
