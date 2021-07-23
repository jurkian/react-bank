module.exports = ({ env }) => ({
   defaultConnection: 'default',
   connections: {
      default: {
         connector: 'bookshelf',
         settings: {
            client: 'mysql',
            host: env('DEV_DATABASE_HOST', 'localhost'),
            port: env.int('DEV_DATABASE_PORT', 3306),
            database: env('DEV_DATABASE_NAME', 'react-bank-api'),
            username: env('DEV_DATABASE_USERNAME'),
            password: env('DEV_DATABASE_PASSWORD'),
            ssl: env.bool('DEV_DATABASE_SSL', false)
         },
         options: {}
      }
   }
});
