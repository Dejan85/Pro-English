const express = require('express');
const router = express.Router();

// controllers
const {
  getCourse,
  gre,
  ielts,
  gmat,
  bocconi
} = require('../controllers/data/data');

// course
router.get('/', getCourse);

// exams
router.get('/gre', gre);
router.get('/ielts', ielts);
router.get('/gmat', gmat);
router.get('/bocconi', bocconi);

module.exports = router;
