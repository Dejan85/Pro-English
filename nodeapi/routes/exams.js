const express = require("express");
const router = express.Router();

//halpers
const { userById, postById } = require("../halpers");

// controllers
const { createExams } = require("../controllers/exams");

router.post("/new/:userId", createExams);



// param
router.param("userId", userById);
// router.param("postId", postById); // any route containing :postById, our app will first execute postById()

module.exports = router;
