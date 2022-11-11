console.log("Cargando configuración...");
// Importar las dependencias
const express = require("express");

// Cargar configuracion app web
const PORT = process.env.PORT || 3000;

console.log("Inicializar la aplicación web...");
const app = express();

console.log("Configurando rutas...");
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use("/app", express.static("frontend"));
app.use("/static", express.static("frontend/static"));

console.log("Iniciando Servidor");
let server = app.listen(PORT, function () {
  console.log(`La aplicación web esta escuchando en el puerto: ` + PORT);
});
