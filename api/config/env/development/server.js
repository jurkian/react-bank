module.exports = ({ env }) => ({
   env: "development",
   host: env("DEV_HOST", "localhost"),
   port: env.int("DEV_PORT", 1337),
   url: env("DEV_URL", "http://localhost:1337"),
   admin: {
      auth: {
         secret: env("DEV_ADMIN_JWT_SECRET", "qwertyuioplkjhgfdsa"),
      },
   },
   cron: {
      enabled: false,
   },
});
