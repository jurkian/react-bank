// Fetch polyfill
import 'whatwg-fetch';

// Promise polyfill
import Promise from 'promise-polyfill';

if (!window.Promise) {
  window.Promise = Promise;
}