'use strict';

// Get all user's messages
const getMyMessages = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const myMessages = await strapi
         .query('message')
         .find({ recipient: currentUser.id, _limit: -1 });

      if (!myMessages.length) {
         return ctx.throw(400, 'no-messages');
      }

      ctx.send(myMessages);
   } catch (error) {
      console.log(error);
      debugger;
   }
};

// Get single message
const getSingle = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const { messageId } = ctx.params;

      const myMessage = await strapi
         .query('message')
         .findOne({ id: messageId, recipient: currentUser.id });

      if (!myMessage) {
         return ctx.throw(400, 'no-message');
      }

      ctx.send(myMessage);
   } catch (error) {
      console.log(error);
      debugger;
   }
};

// Toggle message read
const toggleRead = async ctx => {
   try {
      // ...
   } catch (error) {
      console.log(error);
   }
};

// Delete single message
const remove = async ctx => {
   try {
      // ...
   } catch (error) {
      console.log(error);
   }
};

module.exports = {
   getMyMessages,
   getSingle,
   toggleRead,
   remove
};
