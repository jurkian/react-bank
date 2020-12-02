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
      console.log(error);
      debugger;
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
      console.log(error);
      debugger;
   }
};

// Change card PIN
const changePin = async ctx => {
   try {
      // ...
   } catch (error) {
      console.log(error);
      debugger;
   }
};

// Change card limits
const changeLimits = async ctx => {
   try {
      // ...
   } catch (error) {
      console.log(error);
      debugger;
   }
};

module.exports = {
   getMyCards,
   getSingle,
   changePin,
   changeLimits
};
