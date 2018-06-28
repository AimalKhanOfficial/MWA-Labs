var fs = require('fs');

function readFile() {
    fs.readFile(__dirname + '/aimal.txt', 'utf-8', function(err, data){
        console.log("File Read!" + data);
    });
}


process.on('message', function(msg){
   readFile();
   process.send("File Read!");     
});