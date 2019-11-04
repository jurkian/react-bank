import { callAPI } from './base';

// Get user's cards
export const getMyCards = (params = '') => callAPI(`/cards/my/${params}`);

// Change card's PIN
export const changePin = (id, data) => callAPI(`/cards/${id}`, 'put', data);

// Change card's limits
export const changeLimits = (id, data) => callAPI(`/cards/${id}`, 'put', data);
