var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    
    //Observations - File size under consideration: 103 MB
    
    //First: Reading file Synchronously
    //Took exact 6 seconds with 10 GET requests
    // fs.readFile(path.join(__dirname, 'checkImage.jpg'), function(err, img){
    //     if (err) throw err;
    //     res.end(img);
    // });    
    
    //Second: Reading file Synchronously
    //I counted till 30 seconds and the the image was yet to be displayed
    // fs.readFileSync(path.join(__dirname, 'checkImage.jpg'), function(err, img){
    //     if (err) throw err;
    //     res.end(img);
    // });

    //Second: Reading file using Streams
    //Took exact 6 seconds with 10 GET requests
    fs.createReadStream(path.join(__dirname, 'checkImage.jpg')).pipe(res);

}).listen(1001, () => console.log("Started listening on port 1001."));