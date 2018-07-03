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
    mongoClientGlobal.then(client => {
        var db = client.db("LocationDb");
        db.collection('locations').find({}, function (err, data) {
            console.log(data.locations);
        });
        // );
        // cursor.each((err, doc)=>{

        // });
    }).catch(err => {
        res.json("Error");
    });
});

app.post('/', (req, res, next) => {
    mongoClientGlobal.then(client => {
        var db = client.db("LocationDb");
        db.collection('locations').insert(req.body, function (err, docInserted) {
            if (err) res.status(500).json(err);
            res.status(201).json("Inserted");
        });
    }).catch(err => {
        res.status(500).json("Error");
    });
});

//Step 6
//No Exception Handler

//Step 7
//Boot up
app.listen(3000, () => {
    mongoClientGlobal = connectToDb();
    console.log("Started");
});


function connectToDb() {
    var mongoPromise = promisify(mongoDb.connect);
    return mongoPromise("mongodb://127.0.0.1:27017/LocationDb");
}