require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConecction } = require('./database/config');

// Crea el servidor de express
const app = express();

// Configuracion CORS.
app.use(cors());

// Base Datos
dbConecction();

// console.log(process.env);

// Rutas
app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor ejecutandose en puerto ' + process.env.PORT );
});