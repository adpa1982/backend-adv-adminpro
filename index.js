require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConecction } = require('./database/config');

// Crea el servidor de express
const app = express();

// Configuracion CORS.
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Base Datos
dbConecction();

// Directorio publico
app.use(express.static('public'));

// console.log(process.env);

// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/login', require('./routes/auth') );

app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/upload', require('./routes/uploads') );

// Acceso a la url de angular
// const path = require('path');
/*app.get('*', (req, res) => {
    res.sendFile( path.resolve(__dirname, 'public/index.html') );
});*/


app.listen(process.env.PORT, () => {
    console.log('Servidor ejecutandose en puerto ' + process.env.PORT );
});