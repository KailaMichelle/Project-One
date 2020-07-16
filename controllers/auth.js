const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../models");

router.use(express.urlencoded({ extended: false }));

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// Signup Route
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Login Route
router.get("/login", (req, res) => {
  res.render("login");
});

// After Sign In
router.get("/auth/google/callback", (req, res) => {
  res.render("network");
});

// * Log Out User
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/"); // To homepage
});

// GOOGLE AUTH
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/google", (req, res) => {
  req.render("login");
});


module.exports = router;