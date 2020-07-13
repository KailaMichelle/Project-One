const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./models/index");

dotenv.config({ path: "./config/.env" });
const app = express();
connectDb();
// ----- Static Path Public -----
app.use(express.static(__dirname + "/public"));
// ----- Views EJS -----
app.set("view engine", "ejs");
// ----- Routes -----
app.get("/", (req, res) => {
  res.render("index");
});
// PORT

const PORT = process.env.PORT || 4000;

// Listener
app.listen(PORT, console.log(`Sever is running on port:${PORT}`));
