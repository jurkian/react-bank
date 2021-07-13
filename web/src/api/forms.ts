import { callAPI } from './base';

// Send help form
export const sendHelpForm = (data: {}) => callAPI(`/forms`, 'post', data);
