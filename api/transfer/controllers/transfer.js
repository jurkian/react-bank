'use strict';

// Get all user's transfers
const getMyTransfers = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const myTransfers = await strapi
         .query('transfer')
         .find({ sender: currentUser.id, _limit: -1 });

      if (!myTransfers.length) {
         return ctx.throw(400, 'no-transfers');
      }

      ctx.send(myTransfers);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

// Get single transfer
const getSingle = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const { transferId } = ctx.params;

      const myTransfer = await strapi
         .query('transfer')
         .findOne({ id: transferId, sender: currentUser.id });

      if (!myTransfer) {
         return ctx.throw(400, 'no-transfer');
      }

      ctx.send(myTransfer);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

// Create new transfer

const createValids = require('./create-valids');
const create = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const data = ctx.request.body;
      const { source_account } = data;

      // Handle validation errors
      await strapi.services.errors.handleValidationErrors(ctx.request.body, createValids);

      // Check if user has access to the source_account
      const userHasAccount = await strapi
         .query('account')
         .findOne({ id: source_account, owner: currentUser.id });

      if (!userHasAccount) {
         return ctx.throw(400, 'no-account-permission');
      }

      const createdTransfer = await strapi.query('transfer').create({
         sender: currentUser.id,
         ...data
      });

      ctx.send(createdTransfer);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

module.exports = {
   getMyTransfers,
   getSingle,
   create
};
