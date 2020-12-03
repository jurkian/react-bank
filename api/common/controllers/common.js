'use strict';

const _ = require('lodash');

// Get app config
const getAppConfig = async ctx => {
   try {
      const pluginStore = await strapi.store({
         environment: '',
         type: 'plugin',
         name: 'users-permissions'
      });

      const settings = await pluginStore.get({
         key: 'advanced'
      });

      const settingsToReturn = _.pick(settings, ['allow_register', 'email_confirmation']);

      ctx.send(settingsToReturn);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

// Generate dummy data
const generateDummyData = async ctx => {
   // ...
};

// Clean all data
const cleanAllData = async ctx => {
   // ...
};

module.exports = {
   getAppConfig,
   generateDummyData,
   cleanAllData
};
