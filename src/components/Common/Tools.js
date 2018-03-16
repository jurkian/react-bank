// Add padding from the start of the current string/number
export function myPadStart(el, targetLength, padString) {
   return el.toString().padStart(targetLength, padString);
}

// Insert something after every n characters in the string
export function chunker(el, step, string) {
   const regExp = new RegExp(`.{${step}}`, 'g');
   return el.toString().match(regExp).join(string);
}