var fs = require('fs');

function readFile() {
    return fs.readFileSync(__dirname + '/aimal.txt', 'utf-8');
}

process.on('message', function (msg) {
    process.send(readFile());
});