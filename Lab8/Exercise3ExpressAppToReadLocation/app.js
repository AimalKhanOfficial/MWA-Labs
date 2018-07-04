//Step 1
var express = require('express');
var mongoDb = require('mongodb').MongoClient;
var { promisify } = require('util');

//Step 2
var app = express();
var mongoClientGlobal;

//Step 3
//No Configs yet

//Step 4
app.use(express.json());

//Step 5
app.get('/', (req, res, next) => {
    var allResults = [];
    var cussor = mongoClientGlobal.collection('locations').find({});
    cussor.forEach(function (doc) {
        allResults.push(doc);
    }, function (err) {
        if (!err) res.json(allResults);
    });
});

app.post('/', (req, res, next) => {
    mongoClientGlobal.collection('locations').insert(req.body, function (err, docInserted) {
        if (err) res.status(500).json(err);
        res.status(201).json("Inserted");
    });
});

app.get('/nearest', (req, res, next) => {
    var allResults = [];
    var cussor = mongoClientGlobal.collection('locations').find({ location: { $near: [-91.9678813, 41.0134308] } }).limit(3);
    cussor.forEach(function (doc) {
        allResults.push(doc);
    }, function (err) {
        if (!err) res.json(allResults);
    });
});

//Step 6
//No Exception Handler

//Step 7
//Boot up
app.listen(3000, () => {
    connectToDb();
    console.log("Started");
});


function connectToDb() {
    var mongoPromise = promisify(mongoDb.connect);
    mongoPromise("mongodb://127.0.0.1:27017/LocationDb").then(client => {
        mongoClientGlobal = client.db("LocationDb");
        return;
    }).catch(err => {
        console.log(err);
    });
}