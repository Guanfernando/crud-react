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
    

// Crear el modelo del cliente
const modeloCliente = mongoose.model('Clientes', schemaCliente);

// Exportar el router después de definir las rutas
module.exports = router;

/*ruta de prueba '/ejemplo'
router.post('/ejemplo', (req, res) => {
    res.send('respuesta desde ruta de prueba');
});
*/

//Ruta para agregar  un nuevo cliente
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
        res.status(200).send('Usuario guardado con exito!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//obtener todos los usuarios
router.get('/obtenerUsuario', async (req, res) => {
    try {
        const clientes = await modeloCliente.find();
        res.status(200).send(clientes);
        } catch (err) {
            res.status(500).send(err.message);
            }
            });
