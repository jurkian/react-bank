import { callAPI } from './base';

// Get user's cards
export const getMyCards = () => callAPI(`/cards/my`);

// Get single card
export const getSingleCard = (id: string) => callAPI(`/cards/${id}`);

// Change card's PIN
export const changePin = (id: string, data: {}) => callAPI(`/cards/${id}/change-pin`, 'put', data);

// Change card's limits
export const changeLimits = (id: string, data: {}) =>
   callAPI(`/cards/${id}/change-limits`, 'put', data);
