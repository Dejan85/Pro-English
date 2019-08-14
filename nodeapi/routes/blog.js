const express = require("express");
const router = express.Router();

//halpers
const { userById } = require("../halpers");

// controllers
const { createBlog, getBlog } = require("../controllers/blog");

router.post("/new/:userId", createBlog);
router.get("/get", getBlog);

// param
router.param("userId", userById);

module.exports = router;
