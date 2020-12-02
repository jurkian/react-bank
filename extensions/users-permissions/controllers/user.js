'use strict';

const registerFn = require('./functions/register');
const loginFn = require('./functions/login');

module.exports = {
   register: registerFn,
   login: loginFn
};
