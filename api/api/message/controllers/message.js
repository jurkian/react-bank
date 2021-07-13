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
      strapi.services.errors.throwError(400, error.message);
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
      strapi.services.errors.throwError(400, error.message);
   }
};

// Toggle message read
const toggleRead = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const { messageId } = ctx.params;

      const myMessage = await strapi
         .query('message')
         .findOne({ id: messageId, recipient: currentUser.id });

      if (!myMessage) {
         return ctx.throw(400, 'no-message');
      }

      // Updates
      const updates = {};
      const newIsReadStatus = !myMessage.is_read;

      updates.is_read = newIsReadStatus;

      // Final save
      const updatedMessage = await strapi
         .query('message')
         .update({ id: myMessage.id }, { ...updates });

      ctx.send({ is_read: newIsReadStatus });
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

// Delete single message
const remove = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const { messageId } = ctx.params;

      const myMessage = await strapi
         .query('message')
         .findOne({ id: messageId, recipient: currentUser.id });

      if (!myMessage) {
         return ctx.throw(400, 'no-message');
      }

      const deletedMessage = await strapi.query('message').delete({ id: myMessage.id });

      ctx.send(deletedMessage);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

module.exports = {
   getMyMessages,
   getSingle,
   toggleRead,
   remove
};
