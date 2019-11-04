const express = require('express');

// Controllers
const userCtrl = require('@controllers/user');

// App
const router = express.Router();

// => GET /user/me
// Get myself
router.get('/me', userCtrl.getMyself);

// => PUT /user/me
// Update myself
router.put('/me', userCtrl.updateMyself);

module.exports = router;
