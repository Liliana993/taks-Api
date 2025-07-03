
const express = require('express');
const dbConnect = require("./config/db.js");
const routerTodo = require("./router/router.js")
const app = express();
const cors = require("cors");
require('dotenv').config();
//cors config
app.use(cors());

app.use(express.json());

//AGREGAMOS NUESTRAS RUTAS
app.use(routerTodo);

//conectamos a la base de datos
dbConnect().then(() =>{
        console.log('El servidor esta corriendo');
}).catch(err => {
    console.error('No se ha podido iniciar la conexion a la base de datos.')});

module.exports = app;
