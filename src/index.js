const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("App Node.js en producción 🚀");
});

module.exports = app;
