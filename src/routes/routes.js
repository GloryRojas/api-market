const express = require('express');
const router = express.Router();
const product = require('../models/products')

router.get('/', async (req, res) =>  {

    // const pro;
    
    try {

    //  let canasta = [];
        const products = await product.find();
        // canasta.push(products);
         console.log(products);

        return res.render('home', {
        data: products
        });

    } catch (error) {
        console.log(error)
    }
   
});

router.get('/productOwner/:id', async(req, res) =>{
    
    let owner = req.params.id;
    try {
        const products = await product.find({product_owner : owner})
        console.log(products);
        res.render('owner', {data : products, id : owner})
        
    } catch (error) {
        console.log(error);
    }

    // for(let i=0 ; i < product.length; i++){
    //     if(product[i].product_owner === owner){
    //     prueba.push(product[i]); 
    //     console.log(prueba);
    //     }
    // }
    // console.log('==============')
    // res.send(prueba);

});


router.post('/productOwner/:id', async(req, res)=>{

    let product_owner = req.params.id;
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    pro = {product_owner, name, price, description}

    try {
         const producto = await new product(pro).save();
         
         console.log(producto)
         res.redirect(`/productOwner/${product_owner}`);

    } catch (error) {
        console.log(error)
    }
    // product.push(pro)
    // console.log(product);
});

router.get('/Edit', async(req, res)=>{

    let name = "mouse";
    let price = "60";
    let description = "mouse razer";

    pro = {name, price, description}

    try {
        const edit = await product.findByIdAndUpdate({_id: "5db8c07b1c9d440000bb5358"}, {$set : pro} );
        console.log(edit)
        res.send("hi")
    } catch (error) {
        console.log(error)
    }
    

})
module.exports = router