const _ = require('lodash');

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formatError = error => [
   { messages: [{ id: error.id, message: error.message, field: error.field }] }
];

const { sanitizeEntity } = require('strapi-utils');

const registerValids = require('./register-valids');

const register = async ctx => {
   const pluginStore = await strapi.store({
      environment: '',
      type: 'plugin',
      name: 'users-permissions'
   });

   const settings = await pluginStore.get({
      key: 'advanced'
   });

   if (!settings.allow_register) {
      return ctx.badRequest(
         null,
         formatError({
            id: 'Auth.advanced.allow_register',
            message: 'Register action is currently disabled.'
         })
      );
   }

   // Handle validation errors
   await strapi.services.errors.handleValidationErrors(ctx.request.body, registerValids);

   const params = {
      ..._.omit(ctx.request.body, ['confirmed', 'confirmationToken', 'resetPasswordToken']),
      provider: 'local'
   };

   // Password is required.
   if (!params.password) {
      return ctx.badRequest(
         null,
         formatError({
            id: 'Auth.form.error.password.provide',
            message: 'Please provide your password.'
         })
      );
   }

   // Email is required.
   if (!params.email) {
      return ctx.badRequest(
         null,
         formatError({
            id: 'Auth.form.error.email.provide',
            message: 'Please provide your email.'
         })
      );
   }

   // Throw an error if the password selected by the user
   // contains more than three times the symbol '$'.
   if (strapi.plugins['users-permissions'].services.user.isHashed(params.password)) {
      return ctx.badRequest(
         null,
         formatError({
            id: 'Auth.form.error.password.format',
            message: 'Your password cannot contain more than three times the symbol `$`.'
         })
      );
   }

   const role = await strapi
      .query('role', 'users-permissions')
      .findOne({ type: settings.default_role }, []);

   if (!role) {
      return ctx.badRequest(
         null,
         formatError({
            id: 'Auth.form.error.role.notFound',
            message: 'Impossible to find the default role.'
         })
      );
   }

   // Check if the provided email is valid or not.
   const isEmail = emailRegExp.test(params.email);

   if (isEmail) {
      params.email = params.email.toLowerCase();
   } else {
      return ctx.badRequest(
         null,
         formatError({
            id: 'Auth.form.error.email.format',
            message: 'Please provide valid email address.'
         })
      );
   }

   params.role = role.id;
   params.password = await strapi.plugins['users-permissions'].services.user.hashPassword(params);

   const user = await strapi.query('user', 'users-permissions').findOne({
      email: params.email
   });

   if (user && user.provider === params.provider) {
      return ctx.badRequest(
         null,
         formatError({
            id: 'Auth.form.error.email.taken',
            message: 'Email is already taken.'
         })
      );
   }

   if (user && user.provider !== params.provider && settings.unique_email) {
      return ctx.badRequest(
         null,
         formatError({
            id: 'Auth.form.error.email.taken',
            message: 'Email is already taken.'
         })
      );
   }

   try {
      if (!settings.email_confirmation) {
         params.confirmed = true;
      }

      const user = await strapi.query('user', 'users-permissions').create(params);

      // Prepare user to return
      const sanitizedUser = sanitizeEntity(user.toJSON ? user.toJSON() : user, {
         model: strapi.query('user', 'users-permissions').model
      });

      const userToReturn = _.pick(sanitizedUser, [
         'id',
         'username',
         'email',
         'first_name',
         'last_name',
         'dob',
         'phone',
         'profile_picture',
         'street_addr',
         'postcode',
         'city'
      ]);

      if (settings.email_confirmation) {
         try {
            await strapi.plugins['users-permissions'].services.user.sendConfirmationEmail(user);
         } catch (err) {
            return ctx.badRequest(null, err);
         }

         return ctx.send({ user: userToReturn });
      }

      const jwt = strapi.plugins['users-permissions'].services.jwt.issue(_.pick(user, ['id']));

      return ctx.send({
         jwt,
         user: userToReturn
      });
   } catch (err) {
      const adminError = _.includes(err.message, 'username')
         ? {
              id: 'Auth.form.error.username.taken',
              message: 'Username already taken'
           }
         : { id: 'Auth.form.error.email.taken', message: 'Email already taken' };

      ctx.badRequest(null, formatError(adminError));
   }
};

module.exports = register;
