const express = require('express');

// Controllers
const accountsCtrl = require('@controllers/accounts');

// App
const router = express.Router();

// => GET /accounts/my
// Get my accounts list
router.get('/my', accountsCtrl.getMyAccounts);

// => GET /accounts/:id
// Get single account
router.get('/:id', accountsCtrl.getSingle);

module.exports = router;
