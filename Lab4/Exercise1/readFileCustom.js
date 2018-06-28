var fs = require('fs');

function readFile(resObj) {
    var readStream = fs.createReadStream(__dirname + '/aimal.txt', 'utf-8');
    readStream.on('data', function(data){
        process.send(data);
    });

    readStream.on('end', function(){
        process.send('end');
    });
}

process.on('message', function (msg) {
    readFile();
});