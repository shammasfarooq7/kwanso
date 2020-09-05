const router = require('express').Router();
const Item = require('../model/item');
const verify = require('./verifyToken');

router.post('/', (req, res) => {
    if(verify){
        
    Item.find({})
    .then((items) => {
    res.status(200).json({
        success: true,
        data: items
    })
    }).catch((error) => {
    console.log(error)
    })
    }   
}); 
        
module.exports = router;