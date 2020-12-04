'use strict';

// Get all user's accounts
const getMyAccounts = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const myAccounts = await strapi.query('account').find({ owner: currentUser.id, _limit: -1 });

      if (!myAccounts.length) {
         return ctx.throw(400, 'no-accounts');
      }

      ctx.send(myAccounts);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

// Get single account
const getSingle = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const { accountId } = ctx.params;

      const myAccount = await strapi
         .query('account')
         .findOne({ id: accountId, owner: currentUser.id });

      if (!myAccount) {
         return ctx.throw(400, 'no-account');
      }

      ctx.send(myAccount);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

module.exports = {
   getMyAccounts,
   getSingle
};
