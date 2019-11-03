const express = require('express');

// Controllers
const cardsCtrl = require('@controllers/cards');

// App
const router = express.Router();

// => GET /cards/my
// Get my cards list
router.get('/my', cardsCtrl.getMy);

// => GET /cards/:id
// Get single card
router.get('/:id', cardsCtrl.getSingle);

// => PUT /cards/:id
// Update card details
router.put('/:id', cardsCtrl.update);

module.exports = router;
