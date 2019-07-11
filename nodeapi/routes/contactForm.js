const express = require('express');
const router = express.Router();

// controllers
const { contactForm } = require('../controllers/contactForm');

router.post('/', contactForm);

module.exports = router;
