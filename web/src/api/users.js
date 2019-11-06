import { callAPI } from './base';

// Get myself
export const getMyself = () => callAPI(`/users/me`);

// Update myself
export const updateMyself = data => callAPI(`/users/me`, 'put', data);
