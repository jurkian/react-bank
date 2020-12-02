require('module-alias/register');
const CONFIG = require('@config/config');

// Mongoose
require('./db/mongoose');

// Routes
const authRouter = require('@routes/auth');
const commonRouter = require('@routes/common');
const usersRouter = require('@routes/users');
const accountsRouter = require('@routes/accounts');
const cardRouter = require('@routes/cards');
const messageRouter = require('@routes/messages');
const transferRouter = require('@routes/transfers');
const formsRouter = require('@routes/forms');
const statsRouter = require('@routes/stats');

// Others
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const chalk = require('chalk');

// Middlewares
const auth = require('@middleware/auth');
const errorHandler = require('@middleware/error-handler');
// const maintenance = require('@middleware/maintenance');

// Utilities
const createDummyData = require('@util/dummy-data');

// App
const app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());

// CORS
app.use(cors());

// Maintenance mode
// app.use(maintenance());

// Routes
// No auth required routes
app.use('/auth', authRouter);
app.use('/common', commonRouter);

// Verify JWT and add user data to next requests
app.use(auth);

// Auth routes
app.use('/users', usersRouter);
app.use('/accounts', accountsRouter);
app.use('/cards', cardRouter);
app.use('/messages', messageRouter);
app.use('/transfers', transferRouter);
app.use('/forms', formsRouter);
app.use('/stats', statsRouter);

// Handle errors only in development
if (process.env.CURRENT_ENV === 'development') {
   app.use(errorHandler);
} else {
   app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).send('Server Error');
   });
}

// Start the app
app.listen(CONFIG.port, async () => {
   console.log(
      '%s App is running at http://localhost:%d in %s mode',
      chalk.green('✓'),
      process.env.PORT,
      process.env.CURRENT_ENV
   );

   console.log('  Press CTRL-C to stop\n');

   await createDummyData();
});

module.exports = app;
