export const MESSAGE_TOGGLE_READ = 'MESSAGE_TOGGLE_READ';

export function messageToggleRead (id) {
   return {
      type: MESSAGE_TOGGLE_READ,
      id
   }
}