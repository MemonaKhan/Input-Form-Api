const mongoose = require('mongoose');
let foodSchema = mongoose.Schema({
    _id: {
        type:mongoose.Types.ObjectId,
        required: true,
    },
    Amount:  {
        type:String,
        required: true,
    },
    Image: {
        type:String,
        required: true,
    },
    ExpDate: {
        type:Date,
        required: true,
    },
    Location: {
        type:String,
        required: true,
    },
    DateTime: {
        type:Date,
        required: true,
    },
    Description: {
        type:String,
        required: true,
    },
}, { collection : 'food' });

module.exports = mongoose.model('food', foodSchema); 