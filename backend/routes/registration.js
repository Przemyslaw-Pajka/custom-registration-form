const express = require('express');
const registrationController = require('../controllers/registration')
const router = express.Router();

router.post('/send', registrationController.postRegisterData);

module.exports = router;