const express = require("express");
const router = express.Router();

//halpers
const { userById, postById } = require("../halpers");

// controllers
const {
  createExams,
  getExams,
  editExams,
  deleteExams
} = require("../controllers/exams");

router.post("/new/:userId", createExams);
router.get("/get", getExams);
router.put("/edit/:id", editExams);
router.delete("/remove/:id", deleteExams);

// param
router.param("userId", userById);
// router.param("postId", postById); // any route containing :postById, our app will first execute postById()

module.exports = router;
