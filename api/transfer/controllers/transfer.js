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
      console.log(error);
      debugger;
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
      console.log(error);
      debugger;
   }
};

// Create new transfer
const create = async ctx => {
   try {
      // ...
   } catch (error) {
      console.log(error);
   }
};

module.exports = {
   getMyTransfers,
   getSingle,
   create
};
