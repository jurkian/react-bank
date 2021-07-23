import format from 'date-fns/format';
import jwtDecode from 'jwt-decode';

// Add padding from the start of the current string/number
export const myPadStart = (el: string | number, targetLength: number, padString: string) => {
   return el.toString().padStart(targetLength, padString);
};

// Insert something after every n characters in the string
export const chunker = (el: [] | string | number, step: number, string: string) => {
   const regExp = new RegExp(`.{${step}}`, 'g');

   return el?.toString()?.match(regExp)?.join(string) || '';
};

// Format date
export const formatDate = (date: Date, dateFormat: string) => format(new Date(date), dateFormat);

// Token checker
export const getAuthToken = () => {
   return localStorage.getItem('token');
};

export const setAuthToken = (token: string) => {
   localStorage.setItem('token', token);
};

export const removeAuthToken = () => {
   localStorage.removeItem('token');
};

export const isValidToken = () => {
   return new Promise((resolve, reject) => {
      // Check if token is present
      const currentTime = Date.now().valueOf() / 1000;
      const token = getAuthToken();

      if (!token) {
         reject();
         return;
      }

      const decodedToken: { exp: number } = jwtDecode(token);

      // If token expired - remove it
      if (decodedToken.exp < currentTime) {
         removeAuthToken();

         reject();
         return;
      }

      resolve(token);
   });
};
