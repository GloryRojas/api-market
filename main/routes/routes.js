const router = require('express').Router();
const product = require('../models/products')


router.get('/', (req, res) =>{
    res.send('hello world')
    console.log(product);
})

router.get('/addProduct/user/:idUser', (req, res) =>{ 

    console.log(product);
    const idU = req.params.idUser;
    res.send(`this is ur user id = ${idU}`);

})

router.get('/addProduct/owner/:idOwner', (req, res) =>{

    console.log(product[2]);
    const idOwner = req.params.idOwner;
    res.send(idOwner);

})

module.exports = router