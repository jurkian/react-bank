import { callAPI } from './base';

// Send help form
export const sendHelpForm = data => callAPI(`/forms/help`, 'post', data);
