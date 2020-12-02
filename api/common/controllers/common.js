'use strict';

const _ = require('lodash');

// Get app config
const getAppConfig = async ctx => {
   const pluginStore = await strapi.store({
      environment: '',
      type: 'plugin',
      name: 'users-permissions'
   });

   const settings = await pluginStore.get({
      key: 'advanced'
   });

   const settingsToReturn = _.pick(settings, ['allow_register', 'email_confirmation']);

   return ctx.send(settingsToReturn);
};

module.exports = {
   getAppConfig
};
