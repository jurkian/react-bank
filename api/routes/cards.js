const express = require('express');

// Controllers
const cardsCtrl = require('@controllers/cards');

// App
const router = express.Router();

// => GET /cards/my
// Get my cards list
router.get('/my', cardsCtrl.getMyCards);

// => GET /cards/:id
// Get single card
router.get('/:id', cardsCtrl.getSingle);

// => PUT /cards/:id/change-pin
// Change PIN
router.put('/:id/change-pin', cardsCtrl.changePin);

// => PUT /cards/:id/change-limits
// Change limits
router.put('/:id/change-limits', cardsCtrl.changeLimits);

module.exports = router;
