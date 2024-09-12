const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema del cliente
const schemaCliente = new Schema({
    documento: { type: String, required: [true, 'El campo es obligatorio'] },
    nombre: { type: String, required: [true, 'El campo es obligatorio'] },
    apellido: { type: String, required: [true, 'El campo es obligatorio'] },
    correo: { type: String, required: [true, 'El campo es obligatorio'] },
    telefono: { type: String, required: [true, 'El campo es obligatorio'] },
    edad: { type: Number, required: [true, 'El campo es obligatorio'] },
    direccion: { type: String, required: [true, 'El campo es obligatorio'] },
});

// Crear el modelo del cliente
const modeloCliente = mongoose.model('Clientes', schemaCliente);

// Ruta para agregar un nuevo cliente
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
        res.status(200).send('Usuario guardado con éxito!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Obtener todos los usuarios
router.get('/obtenerUsuario', async (req, res) => {
    try {
        const clientes = await modeloCliente.find();
        res.status(200).send(clientes);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


// borrar usuario
router.post('/borrarCliente/:documento', async (req, res) => {
    try {
        await modeloCliente.findOneAndDelete({ documento: req.params.documento });
        res.status(200).send('Usuario eliminado con éxito!');
        } catch (err) {
            res.status(500).send(err.message);
            }
    });



// Obtener la data del usuario por documento
router.post('/obtenerDataUsuario', async (req, res) => {
    try {
        const cliente = await modeloCliente.findOne({ documento: req.body.documento });
        if (!cliente) {
            return res.status(404).send('Cliente no encontrado');
        }
        res.status(200).send([cliente]);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Actualizar los datos del cliente
router.post('/actualizarCliente', async (req, res) => {
    try {
        const clienteActualizado = await modeloCliente.findOneAndUpdate(
            { documento: req.body.documento },
            {
                documento: req.body.documento,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                correo: req.body.correo,
                telefono: req.body.telefono,
                edad: req.body.edad,
                direccion: req.body.direccion
            },
            { new: true }
        );

        if (!clienteActualizado) {
            return res.status(404).send('Cliente no encontrado');
        }

        res.status(200).send('Cliente actualizado con éxito!');
    } catch (err) {
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
