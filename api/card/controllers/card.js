'use strict';

// Get all user's cards
const getMyCards = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const myCards = await strapi.query('card').find({ owner: currentUser.id, _limit: -1 });

      if (!myCards.length) {
         return ctx.throw(400, 'no-cards');
      }

      ctx.send(myCards);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

// Get single card
const getSingle = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const { cardId } = ctx.params;

      const myCard = await strapi.query('card').findOne({ id: cardId, owner: currentUser.id });

      if (!myCard) {
         return ctx.throw(400, 'no-card');
      }

      ctx.send(myCard);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

// Change card PIN
const changePin = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const { cardId } = ctx.params;
      const data = ctx.request.body;

      const myCard = await strapi.query('card').findOne({ id: cardId, owner: currentUser.id });

      if (!myCard) {
         return ctx.throw(400, 'no-card');
      }

      // Updates
      const updates = {};

      if (data.new_pin) {
         updates.pin = data.new_pin;
      }

      // Final save
      const updatedCard = await strapi.query('card').update({ id: myCard.id }, { ...updates });

      ctx.send(updatedCard);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

// Change card limits
const changeLimits = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const { cardId } = ctx.params;
      const data = ctx.request.body;

      const myCard = await strapi.query('card').findOne({ id: cardId, owner: currentUser.id });

      if (!myCard) {
         return ctx.throw(400, 'no-card');
      }

      // Updates
      const updates = {};

      // Daily online limit
      if (data.dol) {
         updates.daily_online_limit = data.dol;
      }

      // Daily withdrawal limit
      if (data.dwl) {
         updates.daily_withdrawal_limit = data.dwl;
      }

      // Monthly online limit
      if (data.mol) {
         updates.monthly_online_limit = data.mol;
      }

      // Monthly withdrawal limit
      if (data.mwl) {
         updates.monthly_withdrawal_limit = data.mwl;
      }

      // Final save
      const updatedCard = await strapi.query('card').update({ id: myCard.id }, { ...updates });

      ctx.send(updatedCard);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

module.exports = {
   getMyCards,
   getSingle,
   changePin,
   changeLimits
};
