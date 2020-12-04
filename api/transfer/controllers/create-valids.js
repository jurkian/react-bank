const Joi = require('joi');

// allowed: lowercase and uppercase letters, space, '
const nameRegex = /^[ a-zA-Z']+$/;

// allowed: lowercase and uppercase letters, numbers, space, -
const addrRegex = /^[ a-zA-Z0-9\-]+$/;

module.exports = Joi.object({
   payee_name: Joi.string().regex(nameRegex).min(2).max(50).trim().required(),

   amount: Joi.number().precision(2).positive().required(),

   currency: Joi.string().valid('eur', 'gbp').trim().required(),

   reference: Joi.string().regex(nameRegex).min(2).max(40).trim().required(),

   source_account: Joi.number().integer().positive().required(),

   payee_acc_number: Joi.string()
      .regex(/^[0-9]+$/)
      .max(30)
      .required(),

   payee_addr: Joi.string().regex(addrRegex).min(10).max(100).trim().required(),

   method: Joi.string().valid('normal', 'turbo').trim().required(),

   type: Joi.string().valid('income', 'expense').trim().required()
});
