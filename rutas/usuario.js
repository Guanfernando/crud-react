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
    direccion: String
});

// Crear el modelo de usuario
const modeloCliente = mongoose.model('usuarios', schemaCliente);



/*Ruta de prueba
// Definir la ruta '/ejemplo'
router.get('/ejemplo', (req, res) => {
    res.send('Hola mundo');

});
*/

// Ruta para crear un nuevo usuario
router.post('/AgregarUsuario', (req, res) => {
    const nuevoCliente = new modeloCliente({
        documento: req.body.documento,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        telefono: req.body.telefono,
        edad: req.body.edad,
        direccion: req.body.direccion
    });
    nuevoCliente.save(function (err){
        if (!err) {
            res.send('Usuario agregado con exito');
        } else {
            res.send('Error al agregar usuario');
        }
    })
})

// Exportar el router después de definir las rutas
module.exports = router;

