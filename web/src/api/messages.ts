import { callAPI } from './base';

// Get user's messages
export const getMyMessages = () => callAPI(`/messages/my`);

// Get single message
export const getSingleMessage = (id: number) => callAPI(`/messages/${id}`);

// Toggle message read
export const toggleMessageRead = (id: number) => callAPI(`/messages/${id}/toggle-read`, 'put');

// Remove message
export const removeMessage = (id: number) => callAPI(`/messages/${id}`, 'delete');
