const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("App Node.js en producción - Fase 3 Activa 🚀");
});

// --- ESTE ES EL HEALTH CHECK OBLIGATORIO ---
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Configuración del puerto para Render
if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, '0.0.0.0', () => {
        console.log(`Server running on port ${port}`);
    };


module.exports = app
