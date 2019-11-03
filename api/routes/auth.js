const express = require('express');

// Controllers
const authController = require('@controllers/auth');

// App
const router = express.Router();

// => POST /auth/register
// Register user
router.post('/register', authController.register);

// => POST /auth/login
// Login a user
router.post('/login', authController.login);

// => POST /auth/remind-password
// Remind user's password - send a confirmation link
router.post('/remind-password', authController.remindPassword);

// => POST /auth/reset-password
// Send user a new password
router.post('/reset-password', authController.resetPassword);

module.exports = router;
