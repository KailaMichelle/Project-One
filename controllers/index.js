// !routes not followed by anything
// dashboard + home page
const express = require("express");
// * pull in the auth.middleware (deconstruct way)
const { ensureAuth, ensureGuest } = require("../middleware/auth");
// whenever to use middleware in a route add it as a second argument

const router = express.Router();

router.get("/", ensureGuest, (req, res) => {
  res.render("index");
});

//TODO from main page
// DashBoard Route : GET
router.get("/login", ensureAuth, (req, res) => {
  res.render("login");
});

//TODO user/index.ejs
//TODO  contacts
//TODO  /resources

module.exports = router;
