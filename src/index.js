/* global require, process, module */
const express = require('express');
const app = express();

// Ruta principal de producción
app.get('/', (req, res) => {
  res.status(200).send('API Grupo SN-11 - Despliegue test para video');
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
