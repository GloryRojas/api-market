const router = require('express').Router();

router.get('/', (req, res) =>{
    res.send('hello world')
})

router.get('/user', (req, res) =>{

    
})

module.exports = router