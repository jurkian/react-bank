'use strict';

// Send form
const sendForm = async ctx => {
   try {
      const data = ctx.request.body;
      const settings = await strapi.query('settings').findOne();
      const formSendTo = settings.send_form_emails_to || 'email@example.com';

      await strapi.plugins['email'].services.email.send({
         to: formSendTo,
         from: data.from,
         subject: `Contact form email from ${data.from}`,
         text: data.content
      });

      ctx.send({ ok: true });
   } catch (error) {
      strapi.services.errors.throwError(400, error.message);
   }
};

module.exports = {
   sendForm
};
