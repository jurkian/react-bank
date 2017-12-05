export const USER_CHANGE_DETAILS = 'USER_CHANGE_DETAILS';

export function userChangeDetails (id, newEmail, newPassword) {
   return {
      type: USER_CHANGE_DETAILS,
      id,
      newEmail,
      newPassword
   }
}