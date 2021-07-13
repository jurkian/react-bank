import { callAPI } from './base';

// Get stats for specific account
export const getStats = (accId: number, daysPast: number) => callAPI(`/stats/${accId}/${daysPast}`);
