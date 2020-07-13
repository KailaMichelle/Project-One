const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./models/index");

dotenv.config({ path: "./config/.env" });
const app = express();
connectDb();
// ----- Views EJS -----
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Sever is running on port:${PORT}`));
