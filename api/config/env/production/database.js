module.exports = ({ env }) => ({
   defaultConnection: 'default',
   connections: {
      default: {
         connector: 'bookshelf',
         settings: {
            client: 'mysql',
            host: env('PROD_DATABASE_HOST', 'localhost'),
            port: env.int('PROD_DATABASE_PORT', 3306),
            database: env('PROD_DATABASE_NAME', 'react-bank-api'),
            username: env('PROD_DATABASE_USERNAME'),
            password: env('PROD_DATABASE_PASSWORD'),
            ssl: env.bool('PROD_DATABASE_SSL', false)
         },
         options: {}
      }
   }
});
