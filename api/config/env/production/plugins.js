module.exports = ({ env }) => ({
   email: {
      provider: "mailgun",
      providerOptions: {
         apiKey: env("PROD_MAILGUN_API_KEY"),
         domain: env("PROD_MAILGUN_DOMAIN"),
         host: env("PROD_MAILGUN_HOST"),
      },
      settings: {
         defaultFrom: "john.laboune@example.com",
         defaultReplyTo: "john.laboune@example.com",
      },
   },
});
