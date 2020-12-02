module.exports = async (ctx, next) => {
   if (ctx.state.user) {
      // Pass current user based on JWT token
      ctx.params.id = ctx.state.user.id;

      return await next();
   }

   ctx.unauthorized(`You are not logged in`);
};
