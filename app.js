const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bdParser = require('body-parser');
var jsonParser = bdParser.json();
const Foods = require('./model/food');

const dotenv = require("dotenv");
dotenv.config();

CLOUD_MONGODB_URI = process.env.CLOUD_MONGODB_URI,

    mongoose.connect(CLOUD_MONGODB_URI,
        {
            UseNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(
        (db) => {
            console.log(`Server correctly connected with mongodb`);
        },
        (err) => {
            console.log("Error occured while connecting with mongodb ", err);
        }
    );

app.post('/input', jsonParser, function (req, res) {
    const data = new Foods({
        _id: new mongoose.Types.ObjectId(),
        Amount: req.body.Amount,
        Image: req.body.Image,
        ExpDate: req.body.ExpDate,
        Location: req.body.Location,
        DateTime: req.body.DateTime,
        Description: req.body.Description
    });
    data.save().then((result) => { res.send('Data saved') }).catch(err => res.send('Error'));
    // res.send(req.body.Description);
});

// app.get('/foods',function(req,res){
//     Foods.find().then((result) => {
//         res.send(result)
//         // res.status(201).json(result)
//     }).catch((err) => {
//         res.send('error')
//     })
// });

app.listen(4000);