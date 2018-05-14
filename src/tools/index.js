import format from 'date-fns/format';
import parse from 'date-fns/parse';

// Add padding from the start of the current string/number
export function myPadStart(el, targetLength, padString) {
   return el.toString().padStart(targetLength, padString);
}

// Insert something after every n characters in the string
export function chunker(el, step, string) {
   const regExp = new RegExp(`.{${step}}`, 'g');
   return el
      .toString()
      .match(regExp)
      .join(string);
}

// Format date from Firebase (in seconds)
export function formatFirebaseDate(date, dateFormat) {
   if (date.seconds) {
      date = date.seconds * 1000;
   }

   return format(parse(date), dateFormat);
}
