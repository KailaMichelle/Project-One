//Bring in google oAuth Module
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
// User model is needed beacuse we are dealing with a db
const User = require("../models/");
const Guser = require("../models/GUser");
module.exports = (passport) => {
  //create google strategy 'passport.use
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        new User({
          googeID: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        }).save();
        try {
          let User = await User.findOne({ googlId: profile.id });
          if (user) {
            done(null, user);
          } else {
            User = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};