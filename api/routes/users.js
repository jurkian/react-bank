const express = require('express');

// Controllers
const usersCtrl = require('@controllers/users');

// App
const router = express.Router();

// => GET /users/me
// Get myself
router.get('/me', usersCtrl.getMyself);

// => PUT /users/me
// Update myself
router.put('/me', usersCtrl.updateMyself);

// => GET /users/countAll
// Get users count
router.get('/countAll', usersCtrl.getUsersCount);

module.exports = router;
