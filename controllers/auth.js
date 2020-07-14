const express = require("express");
const passport = require("passport");
const router = express.Router();

//* Auth with google GET to /auth/google
// Scrope of whatever is in the profile
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//* Goggle Auth Callback GET to /auth/google/callback
router.get(
  "google/callback",
  passport.authenticate("google", {
    failureRedirect: "/", // ! if failure redirect to HOME/LOGIN [root]***
  }),
  (req, res) => {
    res.redirect("/dashboard"); // ! if sucess redirect to user/dashboard ***
  }
);

module.exports = router;
