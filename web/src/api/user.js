import { callAPI } from './base';

// Get myself
export const getMyself = () => callAPI(`/user/me`);

// Update myself
export const updateMyself = data => callAPI(`/user/me`, 'put', data);

// Get users count
export const getUsersCount = () => callAPI(`/user/countAll`, 'get');
