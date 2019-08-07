const express = require('express');
const router = express.Router();

// controllers
const { getCourse, gre } = require('../controllers/data/data');

// course
router.get('/', getCourse);

// exams
router.get('/gre', gre);

module.exports = router;
