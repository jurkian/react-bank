const Joi = require('joi');

// allowed: lowercase letters, numbers, _, -, . and must finish with letter or number
const usernameRegex = /^[a-z0-9]+([_\-.]*[a-z0-9])*$/;

// allowed: lowercase and uppercase letters, space, '
const nameRegex = /^[ a-zA-Z']+$/;

// allowed: numbers, + (only at the beginning)
const phoneRegex = /^[+]*[0-9]+$/;

// allowed: lowercase and uppercase letters, numbers, space, -
const streetRegex = /^[ a-zA-Z0-9\-]+$/;

// allowed: uppercase letters, space, -
const postcodeRegex = /^[ A-Z\-]+$/;

// allowed: lowercase and uppercase letters, space, -
const cityRegex = /^[ a-zA-Z\-]+$/;

module.exports = Joi.object({
   username: Joi.string().regex(usernameRegex).min(3).max(50).trim().required(),

   email: Joi.string().email().max(100).trim().required(),

   password: Joi.string().min(8).max(100).trim().required(),

   first_name: Joi.string().regex(nameRegex).min(3).max(40).trim().required(),

   last_name: Joi.string().regex(nameRegex).min(3).max(40).trim().required(),

   dob: Joi.string().trim().required(),

   phone: Joi.string().regex(phoneRegex).min(3).max(20).trim().required(),

   // profile_picture: Joi.string().required(),

   street_addr: Joi.string().regex(streetRegex).min(3).max(50).trim().required(),

   postcode: Joi.string().regex(postcodeRegex).min(3).max(10).trim().required(),

   city: Joi.string().regex(cityRegex).min(3).max(50).trim().required()
});
