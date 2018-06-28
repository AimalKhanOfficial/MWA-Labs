const http = require('http');
const { Subject } = require('rxjs');
const url = require('url');

//require for fork
const { fork } = require('child_process');

//creating a reactive server
var obserable = new Subject();

obserable.subscribe(function (param) {
    var parsedUrl = url.parse(param.reqParam.url, true);
    if (parsedUrl.query.url === "path/to/my/file.txt") {
        const childProcess = fork('readFileCustom.js');
        childProcess.send('start');
        childProcess.on('message', function (data) {
            console.log(data);
            param.resParam.end(data);
        });
    }
    else {
        param.resParam.end("Nothing Found!");
    }
});

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    obserable.next({ reqParam: req, resParam: res });
}).listen(4000, () => {
    console.log("Started listening on port: 4000");
});