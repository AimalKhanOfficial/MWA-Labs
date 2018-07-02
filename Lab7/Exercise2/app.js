var express = require('express');
var decipher = require('./cryptoCustom');
var mongoDb = require('mongodb').MongoClient;
var {promisify} = require('util');

var app = express();

app.use(function (req, res, next) {
    var myPromise = promisify(mongoDb.connect);
    myPromise('mongodb://127.0.0.1:27017/test')
    .then(client => {
        var db = client.db('test');
        req.db = db;
        req.client = client;
        next();
    }).catch(err => {
        console.log(err)
    });
});

app.get('/secret', function (req, res, next) {
    req.db.collection('homework7').findOne({}, function (err, doc) {
        if (err) console.log("err", err);
        decipher.write(doc.message, 'hex');
        decipher.end();
        req.client.close();
    })
    res.json("Decrypted! Check console.");
});

app.listen(3000, () => {
    console.log("Started!");
});
