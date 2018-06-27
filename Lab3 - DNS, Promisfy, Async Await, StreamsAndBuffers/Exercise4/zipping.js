var zlib = require('zlib');
var fs = require('fs');

var gZip = zlib.createGzip();

var text = fs.createReadStream(__dirname + "/aimal.txt");
var zipped = fs.createWriteStream(__dirname + "/destination.txt.gz");

text.pipe(gZip).pipe(zipped);



