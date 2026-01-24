const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("App Node.js en producción 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime()
  });
});

module.exports = app;
