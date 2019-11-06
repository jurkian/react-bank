import format from 'date-fns/format';
import parse from 'date-fns/parse';
import jwtDecode from 'jwt-decode';

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
export const formatDate = (date, dateFormat) => format(parse(date), dateFormat);

// Token checker
export const isValidToken = () => {
   return new Promise((resolve, reject) => {
      // Check if token is present
      const currentTime = Date.now().valueOf() / 1000;
      const token = localStorage.getItem('token');

      if (!token) {
         reject();
         return;
      }

      const decodedToken = jwtDecode(token);

      if (decodedToken.exp < currentTime) {
         // Token expired = remove it
         localStorage.removeItem('token');

         reject();
         return;
      }

      resolve(token);
   });
};
