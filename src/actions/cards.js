export const CARD_CHANGE_PIN = 'CARD_CHANGE_PIN';
export const CARD_CHANGE_LIMITS = 'CARD_CHANGE_LIMITS';

export function cardChangePin (id, newPin) {
   return {
      type: CARD_CHANGE_PIN,
      id,
      newPin
   }
}

export function cardChangeLimits (id, newWithdrawalLimit, newOnlineLimit) {
   return {
      type: CARD_CHANGE_LIMITS,
      id,
      newWithdrawalLimit,
      newOnlineLimit
   }
}