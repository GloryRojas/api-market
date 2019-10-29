const express = require('express');
const router = express.Router();
const product = require('../models/products')

router.get('/', (req, res) =>{
    res.send(product)
});


router.get('/addProduct/user/:idUser', (req, res) =>{ 

    const pro = req.body;
    const idU = req.params.idUser;


});

router.get('/addProduct/owner/:idOwner', (req, res) =>{
    
    let owner = req.params.idOwner;
    var prueba = [];

    for(let i=0 ; i < product.length; i++){
        if(product[i].product_owner === owner){
        prueba.push(product[i]); 
        console.log(prueba);
        }
    }
    console.log('==============')
    res.send(prueba);

    // for(let i=0 ; i < product.length; i++){
    //     console.log(product[i]);
    // }

    // res.send(owner);

});


router.post('/addProduct', (req, res)=>{

    let id = req.body.id;
    let product_owner = req.body.product_owner;
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.descriptcion;

    pro = {id, product_owner, name, price, description}
    product.push(pro)
    
    console.log(product);
    res.send(product);
});

module.exports = router