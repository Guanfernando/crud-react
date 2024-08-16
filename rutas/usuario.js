const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema del cliente
const schemaCliente = new Schema({
    documento: String,
    nombre: String,
    apellido: String,
    correo: String,
    telefono: String,
    edad: Number,
    departamento: String,
    ciudad: String,
    direccion: String
});

// Crear el modelo de usuario
const modeloUsuario = mongoose.model('usuarios', schemaCliente);




// Definir la ruta '/ejemplo'
router.get('/ejemplo', (req, res) => {
    res.send('Hola mundo');


});

// Exportar el router después de definir las rutas
module.exports = router;

