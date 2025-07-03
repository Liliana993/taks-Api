
const express = require('express');
const dbConnect = require("./config/db.js");
const routerTodo = require("./router/router.js")
const app = express();
const PORT = 3003;
const cors = require("cors");
const corsOptions = require('./config/corsOption.js');
require('dotenv').config();
//cors config
app.use(cors(corsOptions));

app.use(express.json());

//AGREGAMOS NUESTRAS RUTAS
app.use(routerTodo);

//conectamos a la base de datos
dbConnect().then(() =>{
    app.listen(PORT, () => {
        console.log(`El servidor esta corriendo en el localhost:${PORT}`);
    });

}).catch(err => {
    console.error('No se ha podido iniciar la conexion a la base de datos.')});

module.exports = app;