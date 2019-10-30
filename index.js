const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./src/routes/routes')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')

require('./src/config/dabase'); // mensaje de coneccion a la bd

app.set('view engine', 'ejs'); //plantilla de express
app.set('views', path.join(__dirname, '/src/public')) //directorio de configuracion para renderizar las vistas
//middelwares
app.use(express.static( path.join(__dirname, '/src/public'))) //carpeta estatica donde estaran mis imagenes y estilos
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(router);
app. listen(port, () => {
    console.log(`Running on http://127.0.0.1:${port}`)
})
