import { callAPI } from './base';

// Register user
export const registerUser = (data: {}) => callAPI(`/auth/local/register`, 'post', data);

// Login a user
export const loginUser = (data: {}) => callAPI(`/auth/local/login`, 'post', data);

// Remind user's password - send a confirmation link
export const remindPassword = (data: {}) => callAPI(`/auth/remind-password`, 'post', data);

// Send user a new password
export const resetPassword = (data: {}) => callAPI(`/auth/reset-password`, 'post', data);
