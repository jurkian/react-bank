const express = require('express');
const Users = require('../models/user');
const router = new express.Router();

router.get('/users/:id', async (req, res) => {
   res.status(200).json({ user: 'user' });
});

module.exports = router;
