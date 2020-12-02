const express = require('express');

// Controllers
const formsCtrl = require('@controllers/forms');

// App
const router = express.Router();

// => POST /forms/help
// Send help form
router.post('/help', formsCtrl.sendHelpForm);

module.exports = router;
