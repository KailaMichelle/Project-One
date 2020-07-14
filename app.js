const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const connectDb = require("./models/index");
const MongoStore = require("connect-mongo")(session);

//* ----- Config's -----
dotenv.config({ path: "./config/.env" });
require("./config/passport")(passport); //argument is the passport we required

//* Server + DB Inits
const app = express();
connectDb();

//* ----- Views EJS -----
app.set("view engine", "ejs");
//* Session Middleware (need to be above Passport)
app.use(
  session({
    secret: "WebApp",
    resave: false, // if nothing changed in session don't save
    saveUninitialized: false, // don't create a session until something is store
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
//* Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//* ----- Static Path Public -----
app.use(express.static(__dirname + "/public"));

//* ----- Routes -----
// app.get("/", (req, res) => {
//   res.render("index");
// });
app.use("/", require("./controllers/index"));
//* Auth Routes
app.use("/auth", require("./controllers/auth"));

//* PORT

const PORT = process.env.PORT || 4000;

//* Listener
app.listen(PORT, console.log(`Sever is running on port:${PORT}`));
