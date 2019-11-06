const express = require('express');

// Controllers
const statsCtrl = require('@controllers/stats');

// App
const router = express.Router();

// => GET /stats/:accId/:daysPast
// Get stats for specific account
router.get('/:accId/:daysPast', statsCtrl.getStats);

module.exports = router;
