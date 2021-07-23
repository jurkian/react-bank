import { callAPI } from './base';

// Get myself
export const getMyself = () => callAPI(`/users/get-myself`);

// Update myself
export const updateMyself = (data: {}) => callAPI(`/users/me`, 'put', data);
