const express = require("express");
const router = express.Router();

//halpers
const { userById, postById } = require("../halpers");

// controllers
const { createBlog, getBlog, postPhoto } = require("../controllers/blog");

router.post("/new/:userId", createBlog);
router.get("/get", getBlog);
router.get("/image/:postId", postPhoto);

// param
router.param("userId", userById);
// router.param("postId", postById); // any route containing :postById, our app will first execute postById()

module.exports = router;
