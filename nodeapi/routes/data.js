const express = require('express');
const router = express.Router();

// controllers
const { getCourse } = require('../controllers/data/data');

// course
router.get('/', getCourse);

module.exports = router;
