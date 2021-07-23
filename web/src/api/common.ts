import { callAPI } from './base';

// Get users count
export const getUsersCount = () => callAPI(`/users/count`);
