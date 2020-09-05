const router = require('express').Router();
const Item = require('../model/item');
const verify = require('./verifyToken');

router.post('/', (req, res) => {
    
    if(verify){
    
        items = new Item({
            itemId: req.body.itemId,
            itemName: req.body.itemName

        })
        items.save()
        .then((newItem) => {
        res.status(200).json({
            success: true,
            data: newItem
        })
        }).catch((error) => {
        console.log(error)
        })   
    }
}); 

        
module.exports = router;