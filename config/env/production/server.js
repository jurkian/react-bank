module.exports = ({ env }) => ({
   env: "production",
   host: env("PROD_HOST", "localhost"),
   port: env.int("PROD_PORT", 1338),
   url: env("PROD_URL", "https://your-url.example.com"),
   admin: {
      auth: {
         secret: env("PROD_ADMIN_JWT_SECRET", "zxcvbnmlkjhgfdsa"),
      },
   },
   cron: {
      enabled: false,
   },
});
