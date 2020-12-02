module.exports = ({ env }) => ({
   email: {
      provider: "mailgun",
      providerOptions: {
         apiKey: env("DEV_MAILGUN_API_KEY"),
         domain: env("DEV_MAILGUN_DOMAIN"),
         host: env("DEV_MAILGUN_HOST"),
      },
      settings: {
         defaultFrom: "john.laboune@example.com",
         defaultReplyTo: "john.laboune@example.com",
      },
   },
});
