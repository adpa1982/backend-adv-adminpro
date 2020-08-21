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

// console.log(process.env);

// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/login', require('./routes/auth') );



app.listen(process.env.PORT, () => {
    console.log('Servidor ejecutandose en puerto ' + process.env.PORT );
});