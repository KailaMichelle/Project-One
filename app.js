const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });
const app = express();

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE.ENV} mode on port:${PORT}`)
);
