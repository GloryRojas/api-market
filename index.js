const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./main/routes/routes')

app.set('view engine', 'ejs');

app.use(router)

app. listen(port, () => {
    console.log(`Running on http://127.0.0.1:${port}`)
})
