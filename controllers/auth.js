const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../models");
router.use(express.urlencoded({ extended: false }));
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/signup", (req, res) => {
  res.render("./user/register");
});
//? Login Route
router.get("/login", (req, res) => {
  res.redirect("user/login");
});
router.post("/signup", (req, res) => {
  User.create(req.body, (err, newUser) => {
    if (err) return console.log(err);
    res.redirect("user/register");
  });
});
router.get("/auth/google/callback", (req, res) => {
  res.render("user/show");
});
// * Log Out User
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/"); // To homepage
});

// GOOGLE AUTH
router.get("/login", (req, res) => {
  res.render("./user/login");
});

router.get("auth/google", (req, res) => {
  req.render("user/login");
});


module.exports = router;