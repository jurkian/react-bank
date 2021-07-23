import { callAPI } from './base';

// Get user's transfers
export const getMyTransfers = () => callAPI(`/transfers/my`);

// Get single transfer
export const getSingleTransfer = (id: string) => callAPI(`/transfers/${id}`);

// Create a new transfer
export const createTransfer = (data: {}) => callAPI(`/transfers`, 'post', data);
