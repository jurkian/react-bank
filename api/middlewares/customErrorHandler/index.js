module.exports = strapi => {
   return {
      initialize() {
         strapi.app.use(async (ctx, next) => {
            try {
               await next();
            } catch (error) {
               const { statusCode = 400, message, type } = error;

               ctx.throw(statusCode, { message, type });
            }
         });
      }
   };
};
