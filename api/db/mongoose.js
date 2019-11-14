const CONFIG = require('@config/config');
const mongoose = require('mongoose').set(
   'debug',
   CONFIG.current_env === 'development' ? true : false
);
const chalk = require('chalk');

mongoose.connect(`${CONFIG.mongodb_uri}`, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false,
   useUnifiedTopology: true
});

mongoose.connection.on('error', err => {
   console.error(err);
   console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
   process.exit();
});
