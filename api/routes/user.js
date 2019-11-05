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

// => GET /user/countAll
// Get users count
router.get('/countAll', userCtrl.getUsersCount);

module.exports = router;
