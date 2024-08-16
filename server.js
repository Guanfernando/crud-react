
const express = require ('express');
const app = express();

//importar la conexion a mongoDB
const archivoBD = require('./conexion');

//importacion de archivo de rutas y modelo de cliente
const rutaCliente = require ('./rutas/usuario');


app.use ('/api/usuario',rutaCliente)

app.get('/', (req,res) => {
    res.send('Servidor de Backend NODEJS');
})

    // configuracion servidor
app.listen(5000, function(){
    console.log(`el servidor esta en ejecucion...`)
});