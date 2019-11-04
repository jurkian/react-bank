// Block GET requests
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');

const maintenance = async (req, res, next) => {
   try {
      res.status(503).json({ message: 'Site is currently down. Check back soon!' });
   } catch (err) {
      passError(err, next);
   }
};

module.exports = maintenance;
