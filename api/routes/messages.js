const express = require('express');
const Messages = require('../models/message');
const router = new express.Router();

router.get('/messages/:id', async (req, res) => {});

module.exports = router;
