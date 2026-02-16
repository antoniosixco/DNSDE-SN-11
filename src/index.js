const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("App Rota 💀");
});

// Endpoint mejorado para la monitorización
app.get("/health", (req, res) => {
  res.status(200).json({
    status: 'UP',               // Cambiado de "ok" a "UP" (estándar de industria)
    timestamp: new Date().toISOString(), // Añadido formato ISO
    uptime: process.uptime()    // Segundos que el proceso lleva activo
  });
});

module.exports = app;
