import { callAPI } from './base';

// Get stats for specific account
export const getStats = (accId, daysPast) => callAPI(`/stats/${accId}/${daysPast}`);
