import { callAPI } from './base';

// Get user's messages
export const getMyMessages = () => callAPI(`/messages/my`);

// Get single message
export const getSingleMessage = id => callAPI(`/messages/${id}`);

// Toggle message read
export const toggleMessageRead = id => callAPI(`/messages/${id}/toggle-read`, 'put');

// Remove message
export const removeMessage = id => callAPI(`/messages/${id}`, 'delete');
