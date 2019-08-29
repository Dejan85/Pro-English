const express = require("express");
const router = express.Router();

//halpers
const { userById, postById } = require("../halpers");

// controllers
const { createEvent, getAllEvents } = require("../controllers/events");

router.post("/new", createEvent);
router.get("/get", getAllEvents);

// param
router.param("userId", userById);

module.exports = router;
