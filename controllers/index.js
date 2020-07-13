// !routes not followed by anything
// dashboard + home page
const express = require("express");
const router = express.Router();

// Login / Laniding page Route : GET
router.get("/", (req, res) => {
  res.render("login");
});

// DashBoard Route : GET
router.get("/dashboard", (req, res) => {
  res.render("index");
});

module.exports = router;
