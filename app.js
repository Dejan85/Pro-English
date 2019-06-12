const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 6000;

dotenv.config();

//
// ─── MIDDLEWARE ─────────────────────────────────────────────────────────────────
//

// morgan
app.use(morgan("dev"));
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// cors
app.use(cors());

//
// ─── THIS IS SETUP FOR HEROKU DEPLOY ────────────────────────────────────────────
//

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//
// ─── SERVER CONNECT ─────────────────────────────────────────────────────────────
//

app.listen(port, () => {
  console.log(`Proenglish start on port: ${port}`);
});
