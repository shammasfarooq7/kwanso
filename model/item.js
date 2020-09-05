const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    itemId: {
        type: String
    },
    itemName: {
        type: String
    }
});

module.exports = mongoose.model('Item', itemSchema);