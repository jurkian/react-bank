const express = require('express');

// Controllers
const messagesCtrl = require('@controllers/messages');

// App
const router = express.Router();

// => GET /messages/my
// Get my messages list
router.get('/my', messagesCtrl.getMy);

// => GET /messages/:id
// Get single message
router.get('/:id', messagesCtrl.getSingle);

module.exports = router;
