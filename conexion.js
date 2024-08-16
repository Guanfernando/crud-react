const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test/crudsena');

const objetodb = mongoose.connection;

objetodb.on('connected', () =>{console.log ('Conexion correcta a MongoDB')})
objetodb.on('error', () =>{console.log ('Error con conexion a MongoDB')})

module.exports = mongoose;