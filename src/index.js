/* global require, process, module */
const express = require('express');
const app = express();

// Ruta principal de producción
app.get('/', (req, res) => {
  res.status(200).send('SN-11 Video prueba');
});

// --- ESTE ES EL HEALTH CHECK OBLIGATORIO ---
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
