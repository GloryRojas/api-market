const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const products = new Schema({
        product_owner : String,
        name : String,
        price : String,
        description : String
})


// let product = [
//     {
//         idProduct: 1,
//         product_owner : '1',
//         name : 'cargador',
//         price : '200',
//         descriptcion : 'quick charge'
//     },

//     {
//         idProduct: 2,
//         product_owner : '1',
//         name : 'celular',
//         price : '500',
//         descriptcion : 'Xiaomi'
//     },

//     {
//         idProduct: 3,
//         product_owner : '2',
//         name : 'laptop',
//         price : '2500',
//         descriptcion : 'asus'
//     },

// ]
module.exports = mongoose.model('products', products);

// module.exports = product;


