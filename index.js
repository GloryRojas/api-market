const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./main/routes/routes')
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
//middelwares
    
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(router);
app. listen(port, () => {
    console.log(`Running on http://127.0.0.1:${port}`)
})
