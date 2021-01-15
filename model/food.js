const mongoose = require('mongoose');
let foodSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    Amount: String,
    Image: String,
    ExpDate: Date,
    Location: String,
    DateTime: Date,
    Description: String
}, { collection : 'food' });

module.exports = mongoose.model('food', foodSchema); 