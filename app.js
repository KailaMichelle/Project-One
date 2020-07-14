const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const connectDb = require("./models/index");

// ! Config's
dotenv.config({ path: "./config/.env" });
require("./config/passport")(passport); //argument is the passport we required

//! Server + DB Inits
const app = express();
connectDb();

// ----- Views EJS -----
app.set("view engine", "ejs");
//! Session need to be above Passport
app.use(
  session({
    secret: "WebApp",
    resave: false, // if nothing changed in session don't save
    saveUninitialized: false, // don't create a session until something is stored
    //? later a store value will be here to store user in mongo
  })
);
//! Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// ----- Static Path Public -----
app.use(express.static(__dirname + "/public"));

// ----- Routes -----
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/", require("./controllers/index"));

// PORT

const PORT = process.env.PORT || 4000;

// Listener
app.listen(PORT, console.log(`Sever is running on port:${PORT}`));
