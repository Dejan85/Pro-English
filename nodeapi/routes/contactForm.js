const express = require('express');
const router = express.Router();

// controllers
const { contactForm } = require('../controllers/contactForm');

router.get('/', contactForm);

module.exports = router;
