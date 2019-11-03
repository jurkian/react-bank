const express = require('express');

// Controllers
const transfersCtrl = require('@controllers/transfers');

// App
const router = express.Router();

// => GET /transfers/my
// Get my transfers list
router.get('/my', transfersCtrl.getMy);

// => GET /transfers/:id
// Get single transfer
router.get('/:id', transfersCtrl.getSingle);

// => POST /transfers
// Make a transfer
router.post('/', transfersCtrl.create);

module.exports = router;
