// !routes not followed by anything
// dashboard + home page
const express = require("express");
const router = express.Router();

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

router.get('/resources', (req, res) => {
    res.render('resources/index');
  });

module.exports = router;
