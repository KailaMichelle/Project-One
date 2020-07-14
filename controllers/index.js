// !routes not followed by anything
// dashboard + home page
const express = require("express");
const router = express.Router();

// required db -Kaila
const db = require('../models');

router.get("/", (req, res) => {
  res.render("index");
});

//TODO from main page
// DashBoard Route : GET
router.get("/login", (req, res) => {
  res.render("login");
});

//TODO user/index.ejs
//TODO  contacts
//TODO  /resources

module.exports = router;
