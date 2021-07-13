'use strict';

const _ = require('lodash');

// Functions
const generateDummyData = require('./generate-dummy-data');
const cleanDatabase = require('./clean-database');

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
const generateData = async ctx => {
   try {
      await generateDummyData();

      ctx.send({ ok: true });
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

// Clean all data
const cleanAllData = async ctx => {
   try {
      await cleanDatabase();

      ctx.send({ ok: true });
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

module.exports = {
   getAppConfig,
   generateData,
   cleanAllData
};
