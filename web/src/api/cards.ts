import { callAPI } from './base';

// Get user's cards
export const getMyCards = () => callAPI(`/cards/my`);

// Get single card
export const getSingleCard = id => callAPI(`/cards/${id}`);

// Change card's PIN
export const changePin = (id, data) => callAPI(`/cards/${id}/change-pin`, 'put', data);

// Change card's limits
export const changeLimits = (id, data) => callAPI(`/cards/${id}/change-limits`, 'put', data);
