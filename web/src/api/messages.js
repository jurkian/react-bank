import { callAPI } from './base';

// Get user's messages
export const getMyMessages = (params = '') => callAPI(`/messages/my/${params}`);

// Toggle message read
export const toggleMessageRead = messageId => callAPI(`/messages/${messageId}`, 'put');

// Remove message
export const removeMessage = messageId => callAPI(`/messages/${messageId}`, 'delete');
