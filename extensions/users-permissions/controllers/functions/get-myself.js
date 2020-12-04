const _ = require('lodash');

const getMyself = async ctx => {
   try {
      const currentUser = ctx.state.user;
      const myself = _.pick(currentUser, [
         'id',
         'username',
         'email',
         'first_name',
         'last_name',
         'dob',
         'phone',
         'profile_picture',
         'street_addr',
         'postcode',
         'city'
      ]);

      ctx.send(myself);
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

module.exports = getMyself;
