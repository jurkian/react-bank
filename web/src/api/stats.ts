import { callAPI } from './base';

// Get stats for specific account
export const getStats = (accId: string, daysPast: number) => callAPI(`/stats/${accId}/${daysPast}`);
