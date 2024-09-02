const express = require('express');
const router = express.Router();


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema del cliente
const schemaCliente = new Schema({
    documento:{ 
        type: String,
        required: [true, 'El campo es obligatorio']
        },
    nombre:{
        type: String,
        required: [true, 'El campo es obligatorio']
        },
    apellido:{
        type: String,
        required: [true, 'El campo es obligatorio']
        },
    correo:{
        type: String,
        required: [true, 'El campo es obligatorio']
        },
    telefono:{
        type: String,
        required: [true, 'El campo es obligatorio']
        },
    edad:{
        type: Number,
        required: [true, 'El campo es obligatorio']
        },
    direccion:{
        type: String,
        required: [true, 'El campo es obligatorio']
        },
});
    

// Crear el modelo de usuario
const modeloCliente = mongoose.model('Clientes', schemaCliente);

// Exportar el router después de definir las rutas
module.exports = router;

/*ruta de prueba '/ejemplo'
router.post('/ejemplo', (req, res) => {
    res.send('respuesta desde ruta de prueba');
});
*/

//Ruta para crear un nuevo usuario
router.post('/AgregarUsuario', async (req, res) => {
    const nuevoCliente = new modeloCliente({
        documento: req.body.documento,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        telefono: req.body.telefono,
        edad: req.body.edad,
        direccion: req.body.direccion
    });
    try {
        await nuevoCliente.save();
        res.status(200).send('Usuario guardado');
    } catch (err) {
        res.status(500).send(err.message);
    }
});
