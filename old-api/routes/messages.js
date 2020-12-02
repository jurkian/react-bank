const express = require('express');

// Controllers
const messagesCtrl = require('@controllers/messages');

// App
const router = express.Router();

// => GET /messages/my
// Get my messages list
router.get('/my', messagesCtrl.getMyMessages);

// => GET /messages/:id
// Get single message
router.get('/:id', messagesCtrl.getSingle);

// Toggle message read
// => PUT /messages/:id/toggle-read
router.put('/:id/toggle-read', messagesCtrl.toggleRead);

// Remove message
// => DELETE /messages/:id
router.delete('/:id', messagesCtrl.remove);

module.exports = router;
