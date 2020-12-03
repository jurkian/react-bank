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
      console.log(error);
      debugger;
   }
};

module.exports = getMyself;
