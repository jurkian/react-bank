const express = require('express');
const Transactions = require('../models/transaction');
const router = new express.Router();

router.get('/transactions/:id', async (req, res) => {});

module.exports = router;
