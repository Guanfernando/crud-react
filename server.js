
const express = require ('express');
const app = express();

//importar la conexion a mongoDB
const archivoBD = require('./conexion');

//importacion de archivo de rutas y modelo de cliente
const rutaCliente = require ('./rutas/usuario');  

//importar body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use ('/api/usuario',rutaCliente)

app.get('/', (req, res) => {
    res.end('Servidor de Backend NODEJS');
})

// configuracion servidor
app.listen(5000, function(){
console.log(`el servidor esta en ejecucion...`)
});