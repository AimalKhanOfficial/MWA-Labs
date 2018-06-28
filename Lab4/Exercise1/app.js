const http = require('http');
const { Subject } = require('rxjs');
const url = require('url');

//require for fork
const { fork } = require('child_process');

//creating a reactive server
var obserable = new Subject();

obserable.subscribe(function (param) {
    console.log(`Param: ${param.reqParam.url}`);
    var parsedUrl = url.parse(param.reqParam.url, true);
    //This is my query params
    console.log(parsedUrl.query);
    //console.log(`Parsed: ${.query}`);

    const childProcess = fork('readFileCustom.js');
    childProcess.send('start');
    childProcess.on('message', function (data) {
        param.resParam.end(data);
    });
});

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    obserable.next({ reqParam: req, resParam: res });
    //res.end("HI");
}).listen(9999, () => {
    console.log("Started listening on port: 9999");
});